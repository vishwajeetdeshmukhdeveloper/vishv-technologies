"use client";

import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

/**
 * Full-screen site background with:
 * 1. Noise shader as the base background layer
 * 2. Floating 3D rounded cards positioned on the RIGHT side
 * Mouse-reactive, teal accent palette.
 */
export function HeroCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const mouseSpeedRef = useRef(0);
  const prevMouseRef = useRef({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = 1.0 - e.clientY / window.innerHeight;
    const dx = x - prevMouseRef.current.x;
    const dy = y - prevMouseRef.current.y;
    mouseSpeedRef.current = Math.min(Math.sqrt(dx * dx + dy * dy) * 10, 1.0);
    prevMouseRef.current.x = x;
    prevMouseRef.current.y = y;
    mouseRef.current.x = x;
    mouseRef.current.y = y;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ── Scene ── */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(1.5, 0, 6); // offset camera to far right
    camera.lookAt(1.5, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    /* ── Rounded rectangle shape ── */
    function createRoundedRectShape(w: number, h: number, r: number) {
      const shape = new THREE.Shape();
      shape.moveTo(-w / 2, -h / 2 + r);
      shape.lineTo(-w / 2, h / 2 - r);
      shape.quadraticCurveTo(-w / 2, h / 2, -w / 2 + r, h / 2);
      shape.lineTo(w / 2 - r, h / 2);
      shape.quadraticCurveTo(w / 2, h / 2, w / 2, h / 2 - r);
      shape.lineTo(w / 2, -h / 2 + r);
      shape.quadraticCurveTo(w / 2, -h / 2, w / 2 - r, -h / 2);
      shape.lineTo(-w / 2 + r, -h / 2);
      shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2, -h / 2 + r);
      return shape;
    }

    /* ── Create floating cards — positioned to the RIGHT ── */
    const group = new THREE.Group();
    group.position.set(4.5, 0, 0); // shift entire group to far right
    scene.add(group);

    const cardData = [
      { y: 0, z: 0, scale: 1.0, rotZ: 0 },
      { y: 3.2, z: -1.5, scale: 0.7, rotZ: 0.15 },
      { y: -3.2, z: -1.5, scale: 0.7, rotZ: -0.15 },
      { y: 5.8, z: -3.0, scale: 0.45, rotZ: 0.25 },
      { y: -5.8, z: -3.0, scale: 0.45, rotZ: -0.25 },
    ];

    const cards: THREE.Mesh[] = [];

    cardData.forEach((data) => {
      const shape = createRoundedRectShape(
        2.2 * data.scale,
        2.2 * data.scale,
        0.35 * data.scale
      );
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 0.06,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelSegments: 3,
      });

      const material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        roughness: 0.15,
        metalness: 0.05,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        transparent: true,
        opacity: 0.88,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, data.y, data.z);
      mesh.rotation.z = data.rotZ;
      group.add(mesh);
      cards.push(mesh);
    });

    /* ── Edge glow on main card ── */
    const edgeShape = createRoundedRectShape(2.2, 2.2, 0.35);
    const edgePoints = edgeShape.getPoints(64);
    const edgeGeometry = new THREE.BufferGeometry().setFromPoints(
      edgePoints.map((p) => new THREE.Vector3(p.x, p.y, 0.07))
    );
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x00b4d8,
      transparent: true,
      opacity: 0.3,
    });
    const edgeLine = new THREE.LineLoop(edgeGeometry, edgeMaterial);
    cards[0].add(edgeLine);

    /* ── Lighting ── */
    const ambient = new THREE.AmbientLight(0x222233, 0.8);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(4, 3, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x00b4d8, 0.6);
    rimLight.position.set(-1, -1, 3);
    scene.add(rimLight);

    const backLight = new THREE.DirectionalLight(0x0060a0, 0.4);
    backLight.position.set(2, 0, -5);
    scene.add(backLight);

    /* ── Resize ── */
    function resize() {
      if (!container) return;
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    /* ── Animate ── */
    let animationId: number;
    const clock = new THREE.Clock();
    const targetRotation = { x: 0, y: 0 };

    function animate() {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Mouse-reactive rotation
        targetRotation.x = mouseRef.current.y * 0.25;
        targetRotation.y = mouseRef.current.x * 0.25;
        group.rotation.x += (targetRotation.x - group.rotation.x) * 0.04;
        group.rotation.y += (targetRotation.y - group.rotation.y) * 0.04;

        // Slow auto-rotation
        group.rotation.y += 0.001;

        // Float cards with staggered sine wave
        cards.forEach((card, i) => {
          const offset = i * 0.8;
          card.position.x = Math.sin(elapsed * 0.3 + offset) * 0.15;
          card.rotation.z =
            cardData[i].rotZ + Math.sin(elapsed * 0.25 + offset) * 0.03;
        });

        // Pulse edge glow
        edgeMaterial.opacity = 0.2 + Math.sin(elapsed * 0.8) * 0.15;
      }

      renderer.render(scene, camera);
    }
    animate();

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cards.forEach((card) => {
        card.geometry.dispose();
        (card.material as THREE.Material).dispose();
      });
      edgeGeometry.dispose();
      edgeMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}

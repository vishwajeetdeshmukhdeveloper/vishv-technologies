import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

const About = dynamic(() => import("@/components/sections/About").then((m) => m.About));
const Services = dynamic(() => import("@/components/sections/Services").then((m) => m.Services));
const Community = dynamic(() => import("@/components/sections/Community").then((m) => m.Community));
const WhyChooseUs = dynamic(() =>
  import("@/components/sections/WhyChooseUs").then((m) => m.WhyChooseUs),
);
const Portfolio = dynamic(() => import("@/components/sections/Portfolio").then((m) => m.Portfolio));
const TechStack = dynamic(() => import("@/components/sections/TechStack").then((m) => m.TechStack));
// const Testimonials = dynamic(() =>
//   import("@/components/sections/Testimonials").then((m) => m.Testimonials),
// );
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => m.FAQ));
const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then((m) => m.ContactSection),
);
const Newsletter = dynamic(() => import("@/components/sections/Newsletter").then((m) => m.Newsletter));

function GlowDivider() {
  return <div className="glow-divider" aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <GlowDivider />
      <About />
      <GlowDivider />
      <Services />
      <GlowDivider />
      <Community />
      <GlowDivider />
      <WhyChooseUs />
      <GlowDivider />
      <Portfolio />
      <GlowDivider />
      <TechStack />
      {/* <GlowDivider /> */}
      {/* <Testimonials /> */}
      <GlowDivider />
      <FAQ />
      <GlowDivider />
      <ContactSection />
      <Newsletter />
    </>
  );
}

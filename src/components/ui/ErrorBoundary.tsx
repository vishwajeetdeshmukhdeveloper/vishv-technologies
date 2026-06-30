"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            role="alert"
            className="glass-card mx-auto my-16 max-w-lg rounded-2xl p-8 text-center"
          >
            <h2 className="font-display mb-3 text-xl font-semibold">Something went wrong</h2>
            <p className="text-muted mb-6 text-sm">
              We encountered an unexpected error. Please refresh the page or try again later.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => this.setState({ hasError: false })}
            >
              Try Again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

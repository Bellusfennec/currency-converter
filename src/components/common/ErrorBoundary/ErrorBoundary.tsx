import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode | ReactNode[];
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.log("####: error", error.message);
    return {
      hasError: true
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("####: error", error);
    console.log("####: errorInfo", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h4>Что-то пошло не так!</h4>;
    }
    return this.props.children;
  }
}

import React from "react";
import { ErrorFallbackUI } from "./ErrorFallbackUI";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "", errorInfo: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorLog", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallbackUI {...this.state} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

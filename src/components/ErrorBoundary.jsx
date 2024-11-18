import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    console.log("Error caught by ErrorBoundary:", error);

    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
          <pre>{JSON.stringify(this.state.errorInfo, null, 2)}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

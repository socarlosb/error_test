// @ts-nocheckc
import { Component, PropsWithChildren } from "react";
import CustomError from "./CustomError";

type ErrorBoundaryProps = PropsWithChildren<{}>;

type ErrorBoundaryState = {
  hasError?: boolean;
  err?: Error;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    console.log("🔖 getDerivedStateFromError", { error });
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logErrorToMyService(error, info.componentStack);
    console.log("🔖 componentDidCatch", { error, info });
    if (error) this.setState({ ...this.state, err: error });
  }

  render() {
    if (this.state.err) {
      // You can render any custom fallback UI
      return <CustomError err={this.state.err} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

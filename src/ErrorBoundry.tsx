import React from 'react';

class ErrorBoundry extends React.Component<
  any,
  {
    error: any;
    errorInfo: any;
  }
> {
  constructor(props) {
    super(props);
    this.state = {error: null, errorInfo: null};
  }
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.log({error, errorInfo});

    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{whiteSpace: 'pre-wrap'}}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;

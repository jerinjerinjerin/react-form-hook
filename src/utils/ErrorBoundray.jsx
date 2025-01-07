import React from "react";
import PropTypes from "prop-types";

class ErrorBoundray extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1 style={{ color: "red" }}>Something went wrong.</h1>
              <p>Please try again later.</p>
            </div>
          );
    }

    return this.props.children;
  }
}


ErrorBoundray.propTypes = {
  children: PropTypes.node,
};

ErrorBoundray.displayName = 'ErrorBoundray';

export { ErrorBoundray };
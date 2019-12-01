import React from "react";
import { Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">Place sticky footer content here.</span>
          </div>
        </footer>
      </Container>
    );
  }
}

export default Footer;

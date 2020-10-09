import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Posts extends React.Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="mb-4">
          <Col md="4">
            <img
              src="/imgs/tennis1.jfif"
              className="img-fluid"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Posts;

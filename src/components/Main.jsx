import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main({ children }) {
  return (
    <Container
      fluid
      style={{
        // background:
        //   "linear-gradient(90deg, rgba(217, 217, 217, 0.00) 5.89%, rgba(75, 249, 218, 0.86) 52.62%, #8BFFFF 97.45%)"
        background: "#262626",
        marginTop: "80px",
      }}>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
}

export default Main;

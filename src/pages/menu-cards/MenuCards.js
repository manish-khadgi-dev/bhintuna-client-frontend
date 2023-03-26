import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import momo2 from "../../assets/momo2.jpg";

function MenuCards() {
  return (
    <Container className="mt-5 p-5">
      <Row className="gap-5 d-flex justify-content-between">
        <Col>
          <Card style={{ width: "18rem", height: "30rem" }}>
            <Card.Img variant="top" src={momo2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem", height: "30rem" }}>
            <Card.Img variant="top" src={momo2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem", height: "30rem" }}>
            <Card.Img variant="top" src={momo2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem", height: "30rem" }}>
            <Card.Img variant="top" src={momo2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MenuCards;

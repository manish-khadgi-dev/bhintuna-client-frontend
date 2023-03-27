import { Button, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import momo2 from "../../assets/momo2.jpg";

function MenuCards() {
  return (
    <Container className="mt-5 p-5">
      <Row className="d-flex justify-content-center gap-5">
        <Card style={{ width: "20rem", height: "29rem" }}>
          <Card.Img variant="top" src={momo2} />
          <Card.Body>
            <Card.Title>Chicken Momo </Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">Add </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem", height: "29rem" }}>
          <Card.Img variant="top" src={momo2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem", height: "29rem" }}>
          <Card.Img variant="top" src={momo2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", height: "29rem" }}>
          <Card.Img variant="top" src={momo2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default MenuCards;

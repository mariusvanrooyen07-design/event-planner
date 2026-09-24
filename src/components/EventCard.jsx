import { useContext } from "react";
import { Link } from 'react-router-dom';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { EventContext } from '../context/EventContext.jsx';

export default function EventCard({ event }) {
  
  const { deleteEvent } = useContext(EventContext);
  
  return(
    <Card className="h-100">
      <Card.Body>
        <Card.Title>
          {event.name}
        </Card.Title>
        <Card.Subtitle className="mb-1 text-muted">
          Description:
        </Card.Subtitle>
        <Card.Text>
          {event.description}
        </Card.Text>
        <Card.Subtitle className="mb-1 text-muted">
          Location:
        </Card.Subtitle>
        <Card.Text>
          {event.location}
        </Card.Text>
        <Card.Text>
          {`Date: ${event.date}`}
        </Card.Text>
        <Card.Text>
          {`Time: ${event.time}`}
        </Card.Text>
        
        
        <Row>
          <Col xs={12} md={12} lg={12} xl={12} className="mb-2">
            <Button
              variant="warning"
              as={Link}
              to={`/edit-event/${event.id}`}
            >
            <i className="bi bi-gear me-1"></i>
              Edit Event
            </Button>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12} className="mb-2">
            <Button
              variant="danger"
              onClick={() => deleteEvent(event.id)}
            >
            <i className="bi bi-trash me-1"></i>
            Delete Event
          </Button>
          </Col>
        </Row>       
      </Card.Body>
    </Card>
  );
}
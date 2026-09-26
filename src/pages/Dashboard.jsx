import { useContext } from 'react';
import { EventContext } from '../context/EventContext.jsx';
import EventCard from '../components/EventCard.jsx';
import { Container, Col, Row } from "react-bootstrap";

export default function Dashboard() {
  
  const { events } = useContext(EventContext);

  function getLocalDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const today = getLocalDateString(new Date());

const upcomingEvents = events.filter(event => event.date >= today);
upcomingEvents.sort((a, b) => a.date.localeCompare(b.date));

const pastEvents = events.filter(event => event.date < today);
pastEvents.sort((a, b) => a.date.localeCompare(b.date));

  return(
    <>
      <Container className="bg-info-subtle border rounded p-3 mb-4">
        <h4>Upcoming events</h4>
        <Row className="g-2">
          {upcomingEvents.map((event) => (
            <Col xs={12} md={6} lg={4} xl={3} key={event.id}>
              <EventCard event={event} />
            </Col>
          ))}
        </Row>
      </Container>
      
      <Container className="bg-secondary-subtle border rounded p-3 mb-4">
        <h4>Past events</h4>
        <Row className="g-2">
          {pastEvents.map((event) => (
            <Col xs={12} md={6} lg={4} xl={3} key={event.id}>
              <EventCard event={event} />
            </Col>
          ))}
        </Row>
      </Container>
    </>    
  );
}
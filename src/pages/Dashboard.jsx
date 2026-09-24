import { useContext } from 'react';
import { EventContext } from '../context/EventContext.jsx';
import EventCard from '../components/EventCard.jsx';
import { Col, Row } from "react-bootstrap";

export default function Dashboard() {
  
  const { events } = useContext(EventContext);

  const now = new Date();

  const upcomingEvents = events.filter(event => new Date(event.date) >= now);
  upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastEvents = events.filter(event => new Date(event.date) < now);
  pastEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

  return(
    <>
      <Row className="g-2 m-3">
        <h4>Upcoming events</h4>
        {upcomingEvents.map((event) => (
          <Col xs={12} md={6} lg={4} xl={3} key={event.id}>
            <EventCard event={event} />
          </Col>
          ))}
      </Row>
      <Row className="g-2 m-3">
        <h4>Past events</h4>
        {pastEvents.map((event) => (
          <Col xs={12} md={6} lg={4} xl={3} key={event.id}>
            <EventCard event={event} />
          </Col>
        ))}
      </Row> 
    </>    
  );
}
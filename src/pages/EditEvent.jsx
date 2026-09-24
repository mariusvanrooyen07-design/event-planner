import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { EventContext } from '../context/EventContext.jsx';
import EventForm from '../components/EventForm.jsx';

export default function EditEvent() {
  
  const { id } = useParams();
  const { events, updateEvent } = useContext(EventContext);
  const navigate = useNavigate();
  
  const eventToEdit = events.find((event) => event.id === id);

  function handleEditEvent(name, description, location, date, time) {
    updateEvent(id, { name, description, location, date, time });
    navigate('/dashboard');
  }
  
  return(
    <>
      {eventToEdit ? (
        <EventForm event={eventToEdit} onSubmit={handleEditEvent} />
      ) : (
        <p className="text-center mt-4">Event not found.</p>
      )}
    </>
  );
}
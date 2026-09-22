import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import EventForm from '../components/EventForm.jsx';
import { EventContext } from '../context/EventContext.jsx';

export default function AddEvent() {
  const { addEvent } = useContext(EventContext);
  const navigate = useNavigate();
  
  function handleEventAdd(name, date, time, description, location) {
    addEvent(name, date, time, description, location);
    navigate('/dashboard');
  }

  return(
    <>
      <EventForm onSubmit={handleEventAdd} />
    </>
    
  );
}
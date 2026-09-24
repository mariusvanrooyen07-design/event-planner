import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import EventForm from '../components/EventForm.jsx';
import { EventContext } from '../context/EventContext.jsx';

export default function AddEvent() {
  const { addEvent } = useContext(EventContext);
  const navigate = useNavigate();
  
  function handleEventAdd(name, description, location, date, time) {
    addEvent(name, description, location, date, time);
    navigate('/dashboard');
  }

  return(
    <>
      <EventForm onSubmit={handleEventAdd} />
    </>
    
  );
}
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import EventForm from '../components/EventForm.jsx';
import { EventContext } from '../context/EventContext.jsx';

// The AddEvent page renders the event form and handles submission via handleEventAdd.
export default function AddEvent() {
  const { addEvent } = useContext(EventContext);
  const navigate = useNavigate();
  
  // The handleEventAdd function is used to capture the new events information.
  // It calls the addEvent function to add the new event and then navigates to the dashboard.
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
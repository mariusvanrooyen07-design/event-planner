import { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { loadFromStorage, saveToStorage } from "../utils/storage";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(loadFromStorage('events', []));
  const { currentUser } = useContext(AuthContext);

  function addEvent(name, date, time, description, location) {
    const id = `e_${Date.now()}`;
    const userId = currentUser.id;
    const newEvent = { id, userId, name, date, time, description, location };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    saveToStorage('events', updatedEvents);
  }

  function updateEvent(id, updateDetails) {
    const updatedEvents = events.map((event) =>
      event.id === id ? { ...event, ...updateDetails } : event
    );
    setEvents(updatedEvents);
    saveToStorage('events', updatedEvents);
  }

  function deleteEvent(id) {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    saveToStorage('events', updatedEvents);
  }

  const userEvents = events.filter((event) => event.userId === currentUser?.id);

  return (
      <EventContext.Provider
        value={{
          events: userEvents,
          addEvent,
          updateEvent,
          deleteEvent,
        }}
      >
        {children}
      </EventContext.Provider>
    );
}
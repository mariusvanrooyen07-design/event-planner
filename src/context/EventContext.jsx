import { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { loadFromStorage, saveToStorage } from "../utils/storage";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(loadFromStorage('events', []));
  const { currentUser } = useContext(AuthContext);

  // The addEvent function adds events to the events array and stores it in localStorage.
  function addEvent(name, description, location, date, time) {
    const id = `e_${Date.now()}`;
    const userId = currentUser.id;
    const newEvent = { id, userId, name, description, location, date, time };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    saveToStorage('events', updatedEvents);
  }

  // The updateEvent function updates an existing event and stores it to localStorage.
  function updateEvent(id, updateDetails) {
    // If the event id match the current event's id, the event is updated and stored to localStorage.
    const updatedEvents = events.map((event) =>
      event.id === id ? { ...event, ...updateDetails } : event
    );
    setEvents(updatedEvents);
    saveToStorage('events', updatedEvents);
  }

  // The deleteEvent function deletes the current event.
  function deleteEvent(id) {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    saveToStorage('events', updatedEvents);
  }

  // This filter function keeps the events scope to the current logged in user's events.
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
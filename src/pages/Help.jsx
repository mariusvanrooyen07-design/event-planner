import { Accordion } from "react-bootstrap";
import header from '../assets/header.jpg';
import headerLoggedIn from '../assets/header_logged_in.jpg';
import registerPage from '../assets/register_page.jpg';
import loginPage from '../assets/login_page.jpg';
import dashboard from '../assets/dashboard.jpg';
import addEvent from '../assets/add_event.jpg';
import editEvent from '../assets/edit_event.jpg';
import deleteEvent from '../assets/delete_event.jpg';

export default function Help() {
  return(
    <Accordion defaultActiveKey="0">
      
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Getting around
        </Accordion.Header>
        <Accordion.Body>
          Use the navigation bar at the top of the page to move between sections.
          <img src={header} alt="Navigation header when logged out" className="img-fluid rounded mt-2" />
          Dashboard shows your events, Add Event lets you create a new one, and Help brings you back here. When you're logged in, your username appears on the right along with a Logout button.
          <img src={headerLoggedIn} alt="Navigation header when logged in" className="img-fluid rounded mt-2" />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Creating an account
        </Accordion.Header>
        <Accordion.Body>
          Click Register in the navigation bar and fill in your name, email, username, and password. Your password needs to be at least 8 characters, with an uppercase letter, a lowercase letter, a number, and a special character.
          <img src={registerPage} alt="Registration form" className="img-fluid rounded mt-2" />
          Once registered, log in with your username and password to access your dashboard.
          <img src={loginPage} alt="Login form" className="img-fluid rounded mt-2" />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Managing your events
        </Accordion.Header>
        <Accordion.Body>
          To add an event, click Add Event and fill in the name, date, time, description, and location.
          <img src={addEvent} alt="Add event form" className="img-fluid rounded mt-2" />
          Your events appear on the Dashboard, split into Upcoming and Past.
          <img src={dashboard} alt="Dashboard page showing Upcoming and Past events" className="img-fluid rounded mt-2" />
          To change an event's details, click Edit on its card; to remove it entirely, click Delete and confirm in the popup that appears.  
          <img src={editEvent} alt="Edit event form" className="img-fluid rounded mt-2" />
          <img src={deleteEvent} alt="Delete event confirmation dialog" className="img-fluid rounded mt-2" />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Tips for staying organised
        </Accordion.Header>
        <Accordion.Body>
          Give events specific, descriptive names so they're easy to spot at a glance. Add enough detail in the description that you'll remember the context weeks later. Check your dashboard regularly so upcoming events don't slip past unnoticed, and delete events you no longer need to keep your list easy to scan.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
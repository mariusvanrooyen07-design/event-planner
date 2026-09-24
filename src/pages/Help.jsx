import { Accordion } from "react-bootstrap";

export default function Help() {
  return(
    <Accordion defaultActiveKey="0">
      
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Getting around
        </Accordion.Header>
        <Accordion.Body>
          Use the navigation bar at the top of the page to move between sections. Dashboard shows your events, Add Event lets you create a new one, and Help brings you back here. When you're logged in, your username appears on the right along with a Logout button.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Creating an account
        </Accordion.Header>
        <Accordion.Body>
          Click Register in the navigation bar and fill in your name, email, username, and password. Your password needs to be at least 8 characters, with an uppercase letter, a lowercase letter, a number, and a special character. Once registered, log in with your username and password to access your dashboard.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Managing your events
        </Accordion.Header>
        <Accordion.Body>
          To add an event, click Add Event and fill in the name, date, time, description, and location. Your events appear on the Dashboard, split into Upcoming and Past. To change an event's details, click Edit on its card; to remove it entirely, click Delete — both take effect immediately.
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
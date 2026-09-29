import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Container } from 'react-bootstrap';

// The Layout function wraps every page with the Header on top and the current routs's content via Outlet.
export default function Layout() {
  return(
    <>
      <Header />
      <Container className="page-content">
        <Outlet />
      </Container>
    </>
  );
}
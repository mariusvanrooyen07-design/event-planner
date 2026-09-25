import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AddEvent from './pages/AddEvent.jsx';
import Help from './pages/Help.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import EditEvent from './pages/EditEvent.jsx';
import { EventProvider } from './context/EventContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [ 
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'help', element: <Help /> },
      { 
        element: <ProtectedRoute />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'add-event', element: <AddEvent /> },
          { path: 'edit-event/:id', element: <EditEvent /> },
        ],
      }, 
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <EventProvider>
        <RouterProvider router={router} />
      </EventProvider>
    </AuthProvider>
  </StrictMode>,
)

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Register() {

  const { users, register } = useContext(AuthContext);
  const navigate = useNavigate();

  const validate = values => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      } else if (values.name.length > 15) {
       errors.name = 'Must be 15 characters or less.';
      }
      
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
       errors.email = 'Invalid email address';
      }
  
      const hasUppercase = /[A-Z]/.test(values.password);
      const hasLowercase = /[a-z]/.test(values.password);
      const hasNumber = /[0-9]/.test(values.password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(values.password);

      if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters.';
      } else if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
        errors.password = 'Password must include an uppercase letter, a lowercase letter, a number, and a special character.';
      }

      if (!values.username) {
        errors.username = 'Required';
      } else if (values.username.length > 20) {
       errors.username = 'Must be 20 characters or less.';
      }
      
      const usernameFound = users.find(
        (user) => user.username === values.username
      );
      if (usernameFound) {
        errors.username = 'The username is already used. Please enter a new username.'
      }

      const emailFound = users.find(
        (user) => user.email === values.email
      );
      if (emailFound) {
        errors.email = 'The email is already used. Please enter a new email address.'
      }

      return errors;
    }
    
    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        username: '',
        password: '',
      },
      validate,
      onSubmit: (values) => {
        register(values.name, values.email, values.username, values.password);
        navigate('/login');
      },
    });
    
    return (
      <div>
        <Card className="mt-4 mb-4 text-center justify-content-center">
          <Card.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Label className="text-uppercase">
                Registration form:
              </Form.Label>
              <Row className="justify-content-center">
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Name"
                      autoComplete="given-name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <Form.Text className="text-danger">{formik.errors.name}</Form.Text>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                  <Form.Control
                      name="email"
                      type="email"
                      placeholder="Email address"
                      autoComplete="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      />
                    {formik.touched.email && formik.errors.email ? (
                      <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      name="username"
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username ? (
                      <Form.Text className="text-danger">{formik.errors.username}</Form.Text>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <Form.Text className="text-danger">{formik.errors.password}</Form.Text>
                    ) : null}
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                  >
                    <i className="bi bi-person-square me-2"></i>
                    Register
                  </Button>
                </Col>  
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    ); 
}
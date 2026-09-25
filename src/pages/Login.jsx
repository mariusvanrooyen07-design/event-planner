import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Login() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const validate = values => {
      const errors = {};

      if (!values.username) {
        errors.username = 'Required';
      }
      
      if (!values.password) {
        errors.password = 'Required';
      }
      
      return errors;
    }
    
    const formik = useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validate,
      onSubmit: (values) => {
        const loginStatus = login(values.username, values.password);
        if (loginStatus) {
          navigate('/dashboard');
        } else {
          setLoginError('Incorrect username or password.')
        }  
      },
    });
    
    return (
      <div>
        <Card className="mt-4 mb-4 text-center justify-content-center">
          <Card.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Label className="text-uppercase">
                Login form:
              </Form.Label>
              <Row className="justify-content-center">
                <Col md={6}>
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
                      autoComplete="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <Form.Text className="text-danger">{formik.errors.password}</Form.Text>
                    ) : null}
                  </Form.Group>
                  
                  {loginError && <p className="text-danger">{loginError}</p>}
                  
                  <Button
                    variant="primary"
                    type="submit"
                  >
                    <i className="bi bi-person-square me-2"></i>
                    Login
                  </Button>
                </Col>  
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    ); 
}
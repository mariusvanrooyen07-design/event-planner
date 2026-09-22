import { useFormik } from "formik";
import { Card, Col, Row, Form, Button } from "react-bootstrap";

export default function EventForm({ onSubmit }) {

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.date) {
      errors.date = 'Required';
    }
    if (!values.time) {
      errors.time = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    if (!values.location) {
      errors.location = 'Required';
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
      time: '',
      description: '',
      location: '',
    },
    validate,
    onSubmit: (values) => {
      onSubmit(values.name, values.date, values.time, values.description, values.location);
    },
  });

  return (
    <>
      <Card className="mt-4 mb-4 text-center justify-content-center">
        <Card.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Label className="text-uppercase">
              Add event form:
            </Form.Label>
            <Row className="justify-content-center">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Event name"
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
                    name="date"
                    type="date"
                    placeholder="Event date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.date}
                  />
                  {formik.touched.date && formik.errors.date ? (
                    <Form.Text className="text-danger">{formik.errors.date}</Form.Text>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    name="time"
                    type="time"
                    placeholder="Event time"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.time}
                  />
                  {formik.touched.time && formik.errors.time ? (
                    <Form.Text className="text-danger">{formik.errors.time}</Form.Text>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    name="description"
                    type="text"
                    placeholder="Event description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                  />
                  {formik.touched.description && formik.errors.description ? (
                    <Form.Text className="text-danger">{formik.errors.description}</Form.Text>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    name="location"
                    type="text"
                    placeholder="Event location"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.location}
                  />
                  {formik.touched.location && formik.errors.location ? (
                    <Form.Text className="text-danger">{formik.errors.location}</Form.Text>
                  ) : null}
                </Form.Group>
                      
                <Button
                  variant="primary"
                  type="submit"
                >
                  <i className="bi bi-calendar-plus me-2"></i>
                  Add Event
                </Button>
              </Col>  
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
        
  );
}
import { useFormik } from "formik";
import { Card, Col, Row, Form, Button } from "react-bootstrap";

export default function EventForm({ event, onSubmit }) {

  const validate = values => {
    const errors = {};
    if (!values.name) errors.name = 'Required';
    if (!values.description) errors.description = 'Required';
    if (!values.location) errors.location = 'Required';
    if (!values.date) errors.date = 'Required';
    if (!values.time) errors.time = 'Required';
    return errors;
  };

  const formik = useFormik({
        initialValues: {
        name: event?.name || '',
        description: event?.description ||  '',
        location: event?.location ||  '',
        date: event?.date ||  '',
        time: event?.time ||  '',
      },
      validate,
      onSubmit: (values) => {
        onSubmit(values.name, values.description, values.location, values.date, values.time);
      },
    });

  return (
    <>
      <Card className="mt-4 mb-4 text-center justify-content-center bg-info-subtle">
        <Card.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Label className="text-uppercase">
              {event ? 'Edit event form:' : 'Add event form:'}
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
                      
                <Button
                  variant="primary"
                  type="submit"
                >
                  <i className={`bi ${event ? 'bi-pencil-square' : 'bi-calendar-plus'} me-2`}></i>
                  {event ? 'Update Event' : 'Add Event'}
                </Button>
              </Col>  
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>    
  );
}
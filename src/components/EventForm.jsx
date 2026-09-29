import { useFormik } from "formik";
import { Card, Col, Row, Form, Button } from "react-bootstrap";

// The EventForm function is used to render a form used to add and edit events.
export default function EventForm({ event, onSubmit }) {

  // The validate function is used to set error messages for form fields that are required.
  // It returns an error field for formik.
  const validate = values => {
    const errors = {};
    if (!values.name) errors.name = 'Required';
    if (!values.description) errors.description = 'Required';
    if (!values.location) errors.location = 'Required';
    if (!values.date) errors.date = 'Required';
    if (!values.time) errors.time = 'Required';
    return errors;
  };

  // The formik function is used to set the initial values of the add and edit event forms.
  // For add event the fields are empty and for edit event the current event's data will be prefilled.
  const formik = useFormik({
        initialValues: {
        name: event?.name || '',
        description: event?.description ||  '',
        location: event?.location ||  '',
        date: event?.date ||  '',
        time: event?.time ||  '',
      },
      validate,
      // The onSubmit function saves the values of the input fields.
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
              {/* If event is empty the form name is Add event */}
              {/* If event has a value the form name is Edit event */}
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
                  {/* Shows a validation error below the field once it's been touched and fails validation. */}
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
                    {/* Shows a validation error below the field once it's been touched and fails validation. */}
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
                    {/* Shows a validation error below the field once it's been touched and fails validation. */}
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
                  {/* Shows a validation error below the field once it's been touched and fails validation. */}
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
                  {/* Shows a validation error below the field once it's been touched and fails validation. */}
                  {formik.touched.time && formik.errors.time ? (
                    <Form.Text className="text-danger">{formik.errors.time}</Form.Text>
                  ) : null}
                </Form.Group>
                      
                <Button
                  variant="primary"
                  type="submit"
                >
                  {/* The submit button and icon depends if the event is empty or not. */}
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
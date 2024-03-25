import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Alert, Col, Row, Spinner, CardBody } from 'react-bootstrap';
import { getToDoById, updateToDo } from '../todoApp/api';
import * as Yup from 'yup';
import { useFormik } from "formik";

const EditToDo = ({ currentNoteId, setOp, setRefreshList }) => {
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null); // Dosya değişkeni

  const initialValues = {
    title: "",
    description: "",
    startDateTime: "",
    endDateTime: "",
    withWho: "",
    place: "",
  };
   const convertToISOFormat = (formattedDateTime) => {
    // moment ile belirli bir formata formatlanmış tarihi al ve ISO 8601 formatına dönüştür
    const isoFormattedDateTime = moment(formattedDateTime, 'ddd hA').format('YYYY-MM-DDTHH:mm');
    return isoFormattedDateTime;
  };

  const validationSchema = Yup.object({
    title: Yup.string().max(50, "Max 50 chars").required("Required"),
    description: Yup.string().max(200, "Max 200 chars").required("Required"),
    startDateTime: Yup.date()
      .required("Required")
      .min(new Date(), "Start date cannot be in the past"),
    endDateTime: Yup.date()
      .required("Required")
      .min(Yup.ref('startDateTime'), "End date must be after start date"),
  });

  const onSubmit = async (values) => {
    try {
      await updateToDo(currentNoteId, values, file);
      setOp(null);
      setRefreshList(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    const loadToDo = async () => {
      try {
        const response = await getToDoById(currentNoteId);
        formik.setValues(response);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };
    loadToDo();
  }, [currentNoteId]);


  
  return (
    <Card className="mb-4">
      <CardBody>
        {error ? <Alert className="mb-4">{error.message}</Alert> : null}
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Row>
          <h1>ToDo App</h1>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("title")}
                  isInvalid={formik.touched.title && formik.errors.title}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.title}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("description")}
                  isInvalid={formik.touched.description && formik.errors.description}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Start Date Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  {...formik.getFieldProps("startDateTime")}
                  isInvalid={formik.touched.startDateTime && formik.errors.startDateTime}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.startDateTime}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>End Date Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  {...formik.getFieldProps("endDateTime")}
                  isInvalid={formik.touched.endDateTime && formik.errors.endDateTime}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.endDateTime}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>With Who</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("withWho")}
                  isInvalid={formik.touched.withWho && formik.errors.withWho}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.withWho}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Place</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("place")}
                  isInvalid={formik.touched.place && formik.errors.place}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.place}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  // Dosya seçildiğinde setFile fonksiyonunu kullanarak dosyayı ayarlayın
                  onChange={(e) => setFile(e.target.files[0])}
                  isInvalid={formik.touched.image && formik.errors.image}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.image}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={() => setOp(null)}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={formik.isSubmitting || !(formik.dirty && formik.isValid)}
            >
              {formik.isSubmitting ? (
                <Spinner size="sm" />
              ) : (
                "Update"
              )}
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

export default EditToDo;

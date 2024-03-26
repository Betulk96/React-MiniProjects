import React, { useState } from 'react'
import { useFormik } from "formik";
import { Alert, Button, Card, CardBody, Col, Form, Row, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { createToDo } from "../todoApp/api";
import "../scss/form.scss";

const NoteForm = ({ setOp, setRefreshList }) => {
  const [error, setError] = useState(null);
  const initialValues = {
    title: "",
    description: "",
    startDateTime: "",
    endDateTime: "",
    image: "",
    withWho: "",
    place: "",
    condition: false,
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

    //ref ile sDT a referans verdik
  });

  const onSubmit = async (values) => {
    try {
      await createToDo(values);
      setOp(null);
      formik.resetForm();
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
  const handleCancel = () => {
    const confirmCancel = window.confirm("Are you sure you want to cancel? Your changes will be lost.");
    if (confirmCancel) {
      formik.resetForm(); // Formu sıfırla
      setOp(null); // Operasyonu sıfırla
    }
  };
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  return (

    <Card className="formCard mb-4">
      <CardBody>
        {/* eğer hata varsa messaje geicek */}
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
                  className="starTime"
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
                  className="endTime"
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
            </Col><Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  {...formik.getFieldProps("image")}
                  isInvalid={formik.touched.image && formik.errors.image}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.image}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>



          </Row>

          <div className=" d-flex justify-content-between ">
            <Button className='btnCancel' onClick={handleCancel}>
              Cancel
            </Button>

            <Button
              className='btnSubmit'
              type="submit"
              disabled={
                formik.isSubmitting ||
                !(formik.dirty && formik.isValid)
              }
            >
              {formik.isSubmitting ? (
                <Spinner size="sm" />
              ) : (
                "Create"
              )}
            </Button>
          </div>

        </Form>
      </CardBody>
    </Card>
  )
}

export default NoteForm;

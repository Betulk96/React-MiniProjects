import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Form, ListGroup, Row, Spinner } from 'react-bootstrap';
import { deleteToDo, updateToDo } from '../todoApp/api';
import moment from 'moment';
import { TfiPencil, TfiTrash, TfiCheck, TfiClose } from "react-icons/tfi";

import "../scss/card.scss";


const Note = (props) => {
  const [deleting, setDeleting] = useState(false);
  const [conditions, setConditions] = useState(false);
  const { id, title, description, startDateTime, endDateTime, image, withWho, place, condition, setOp, setCurrentNoteId, setRefreshList } = props;


  // Komponent ilk render edildiğinde API'den gelen condition değerini ayarla
  useEffect(() => {
    setConditions(condition);
  }, [condition]);

  const formattedStartDateTime = moment(startDateTime).format('MMM DD : hA');
  const formattedEndDateTime = moment(endDateTime).format('MMM DD : hA');

  const handleEdit = () => {
    console.log({
      id,
      title,
      description,
      startDateTime,
      endDateTime,
      image,
      withWho,
      place,

    });
    setCurrentNoteId(id);
    setOp("edit");
  };

  const handleDelete = async () => {
    const answer = window.confirm("Are you sure to delete?");
    if (!answer) return;

    setDeleting(true);
    try {
      await deleteToDo(id);
      setRefreshList(Math.random());
    } catch (err) {
      alert(err.message);
    } finally {
      setDeleting(false);
    }
  };

  const handleConditionChange = async () => {
    try {
      const newCondition = !conditions;
      setConditions(newCondition);
      await updateToDo(id, { condition: newCondition });
    } catch (error) {
      console.error('Error updating condition:', error);
      setConditions(!conditions);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Animasyonlu kaydırma için
    });
  };
  return (
    <Card className=" text-center">
      <Card.Header >
        <h5 style={{ textTransform: 'uppercase' }}>{title}</h5>
        <small>{formattedStartDateTime} / {formattedEndDateTime}</small>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={3}>
            <Card.Img variant="top" src={image} />
          </Col>
          <Col className="text-start align-self-end" md={9}>
            <Card.Text className="ps-2 fs-5 ">{description}</Card.Text>
            <nav className="ps-2 fw-light  ">
              <div>With: {withWho}</div>
              <div>Place: {place}</div>
            </nav>

          </Col>
        </Row>



      </Card.Body>
      <Card.Footer className="deleteEditBtn">
        <Form>
          <Form.Check

            type="switch"
            id="custom-switch"
            checked={conditions}
            onChange={handleConditionChange}
          />
        </Form>
        <div>
          <Button
            size="lg"
            className="btnTrash me-2"
            onClick={handleDelete}
            disabled={deleting}
          >
            {deleting ? (
              <Spinner variant="info" size="sm" />
            ) : (
              <TfiTrash />
            )}
          </Button>
          <Button
            size="lg"
            className="btnPencil "
            onClick={() => {
              handleEdit();
              scrollToTop();
            }}
            disabled={deleting}
          >
            <TfiPencil />
          </Button>
        </div>

      </Card.Footer>
    </Card>
  )

}

export default Note;

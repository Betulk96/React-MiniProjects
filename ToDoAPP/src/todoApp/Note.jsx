import React, { useState, useEffect } from 'react'
import { Button, Card, Form, ListGroup, Spinner } from 'react-bootstrap';
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

  const formattedStartDateTime = moment(startDateTime).format('DD ddd hA');
  const formattedEndDateTime = moment(endDateTime).format('DD ddd hA');

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
    <Card className="cardBody text-center">
      <Card.Header className="justify-content-end">
        <div>{title} </div>
        <div>{formattedStartDateTime} - {formattedEndDateTime}</div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Card.Img variant="top" src={image} />
        <ListGroup className="list-group-flush">
          <ListGroup.Item>With: {withWho}</ListGroup.Item>
          <ListGroup.Item>Place: {place}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="deleteEditBtn">
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Condition"
            checked={conditions}
            onChange={handleConditionChange}
          />
        </Form>

        <Button
          variant="danger"
          size="lg"
          className="mt-3 ms-3"
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
          variant="warning"
          size="lg"
          className="mt-3 ms-3"
          onClick={() => {
            handleEdit();
            scrollToTop();
          }}
          disabled={deleting}
        >
          <TfiPencil />
        </Button>
      </Card.Footer>
    </Card>
  )
  
}

export default Note;

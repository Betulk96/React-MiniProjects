import React, { useEffect, useState } from 'react'
import { getToDo } from './api';
import { Alert, Col, Spinner, Row } from 'react-bootstrap';
import Note from './Note';

const NoteList = (props) => {
  const { refreshList, setOp, setCurrentNoteId, setRefreshList } = props;
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getToDo();
        setNotes(data.reverse());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [refreshList]);

  const errMessage = error ? (
    <Alert variant="danger">{error.message}</Alert>
  ) : null;

  const loadingMessage = loading ? (
    <div className="text-center">
      <Spinner />
    </div>
  ) : null;


  const noteList = (<Row xs={1} md={2} lg={3} xl={4} className="g-4">
    {notes.length <= 0 ? (
      <Alert variant="warning">No product found</Alert>
    ) : null}
    {notes.map((item) => (
      <Col key={item.id}>
        {/* props driling-parenttan childe props önderme  */}
        <Note
          {...item}
          setOp={setOp}
          setCurrentNoteId={setCurrentNoteId}
          setRefreshList={setRefreshList}
        />
      </Col>
    ))}
  </Row>
  );


  return (
    <div>
      {loadingMessage}
			{errMessage}
			{noteList}
    </div>
  )
}

export default NoteList;

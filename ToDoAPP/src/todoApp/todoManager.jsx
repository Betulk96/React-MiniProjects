import React, { useState } from 'react';
import NoteForm from './NoteForm';
import EditToDo from './editToDo';
import { Container, Row, Col } from "react-bootstrap";
import NoteList from './NoteList';

const TodoManager = () => {
    const [op, setOp] = useState(null);
    const [refreshList, setRefreshList] = useState(0);
    const [currentNoteId, setCurrentNoteId] = useState(null);

    return (
        <Container className='m-0 p-0  ' >
        <Row className="mt-4 m-0 ">
            <Col md={4} lg={3}>
                    
                {/* Koşullu render kullanarak NoteForm'u gizleme */}
                {op !== "edit" && (
                    <NoteForm
                        setOp={setOp}
                        setRefreshList={setRefreshList}
                    />
                )}

                {/* Eğer op "edit" ise EditToDo bileşenini render et */}
                {op === "edit" && (
                    <EditToDo
                        currentNoteId={currentNoteId}
                        setOp={setOp}
                        setRefreshList={setRefreshList}
                        setCurrentNoteId={setCurrentNoteId}
                    />
                )}

            </Col>

            <Col>
                <NoteList
                    refreshList={refreshList}
                    setOp={setOp}
                    setCurrentNoteId={setCurrentNoteId}
                    setRefreshList={setRefreshList}
                />
            </Col>
        </Row>
    </Container>
    );
}

export default TodoManager;
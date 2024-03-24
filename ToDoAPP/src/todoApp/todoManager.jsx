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
        <Container>
            <Row className="mt-4">
                <Col md={4} lg={3}>
                    
                    <NoteForm
                        setOp={setOp}
                        setRefreshList={setRefreshList}
                        
                    />
                </Col>

                <Col>
                    {op === "edit" ? (
                        <EditToDo
                            currentNoteId={currentNoteId}
                            setOp={setOp}
                            setRefreshList={setRefreshList}
                            setCurrentNoteId={setCurrentNoteId}
                        />
                    ) : null}

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
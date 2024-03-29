import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../main/card";
import  data from "./flowers.json";
const CardList = () => {
    return (
        
            <Container className="my-4">
			<Row xs={1} sm={2} md={3} lg={4} className="g-4">
				{data.map((item) => (
					<Col key={item.id}>
						<Cards {...item} />
					</Col>
				))}
			</Row>
		</Container>
        
    )
}

export default CardList;

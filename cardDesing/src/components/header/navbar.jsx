import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./navbar.scss";

function Header() {
	return (
		<div>
			<Navbar expand="lg" className=" ">
				<Container>
					<Navbar.Brand href="#"> <img src="https://icons.iconarchive.com/icons/iconarchive/mothers-day/48/Flower-Heart-icon.png" alt="" />Flower Shop </Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="mx-auto my-2 my-lg-0"

						>
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">Products</Nav.Link>
							<Nav.Link href="#action2">Profile</Nav.Link>
							<Nav.Link href="#action2">Basket</Nav.Link>


						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button className="btn">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
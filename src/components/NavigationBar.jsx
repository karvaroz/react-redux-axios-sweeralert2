import { useState } from "react";
import { Button, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CreateModalForm from "./CreateModalForm";

function NavigationBar() {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar>
			<Container>
				<Navbar.Brand
					onClick={() => navigate("/")}
					className="d-flex align-items-center justify-content-centerms btn">
					Users
					<ion-icon name="people-outline"></ion-icon>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Button
						className="d-flex align-items-center justify-content-center"
						onClick={handleShow}>
						Add <ion-icon name="add-circle-outline"></ion-icon>
					</Button>
				</Navbar.Collapse>
			</Container>
			<CreateModalForm
				show={show}
				handleClose={handleClose}
				handleShow={handleShow}
			/>
		</Navbar>
	);
}

export default NavigationBar;

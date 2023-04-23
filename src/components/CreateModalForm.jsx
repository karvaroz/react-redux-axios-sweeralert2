import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { InputForm, SelectForm } from "./form";
import {
	getUserTimeZone,
	htmlRegexG,
	language,
	subscription,
	theme,
} from "../utils";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { createUser, getAllUsers } from "../redux";
import { useNavigationType } from "react-router-dom";

const CreateModalForm = ({ show, handleClose }) => {
	const dispatch = useDispatch();
	const { data, setData, handleChange, handleChangeSelect } = useForm();
	const navigate = useNavigationType();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(createUser(data)).then(() => {
			Swal.fire("Successfully Created");
			handleClose();
			setData({});
			dispatch(getAllUsers());
			navigate("/");
		});
	};
	return (
		<Modal
			show={show}
			onHide={handleClose}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Create a New User
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<InputForm
						label="TIMEZONE"
						type="text"
						value={getUserTimeZone()}
						disabled={true}
						onChange={handleChange}
						name="displayed_timezone"
					/>
					<SelectForm
						label="SUBSCRIPTION"
						name="SUBSCRIPTION"
						defaultValue={subscription[0].value}
						options={subscription}
						onChange={handleChangeSelect}
						value={data?.SUBSCRIPTION}
					/>
					<SelectForm
						label="CODE LANGUAGE"
						name="language_code"
						defaultValue={language[0].value}
						options={language}
						onChange={handleChangeSelect}
						value={data?.language_code}
					/>
					<SelectForm
						label="THEME"
						name="theme_name"
						defaultValue={theme[0].value}
						options={theme}
						onChange={handleChangeSelect}
						value={data?.theme_name}
					/>
					<InputForm
						label="EMAIL"
						type="email"
						value={data?.user_email}
						disabled={false}
						onChange={handleChange}
						name="user_email"
					/>
					<InputForm
						label="BANNER MESSAGE"
						type="text"
						value={data?.banner_message?.replace(htmlRegexG, "")}
						disabled={false}
						onChange={handleChange}
						name="banner_message"
					/>
					<InputForm
						label="USER IMAGE"
						type="text"
						value={data?.user_profile_image}
						disabled={false}
						onChange={handleChange}
						name="user_profile_image"
					/>
					<Button type="submit">Create</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default CreateModalForm;

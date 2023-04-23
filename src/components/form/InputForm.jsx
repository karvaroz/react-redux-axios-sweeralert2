import React from "react";
import { Form } from "react-bootstrap";

const InputForm = ({ label, type, value, disabled, onChange, name }) => {
	return (
		<Form.Group className="col-md-12 mb-2">
			<Form.FloatingLabel
				className="labels"
				htmlFor={name}>
				{label}
			</Form.FloatingLabel>
			<Form.Control
				id={name}
				name={name}
				type={type}
				value={value}
				disabled={disabled}
				onChange={onChange}
				required
			/>
		</Form.Group>
	);
};

export default InputForm;

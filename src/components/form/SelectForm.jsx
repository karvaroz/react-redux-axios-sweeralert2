import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";

const SelectForm = ({
	label,
	name,
	defaultValue,
	options,
	onChange,
	value,
}) => {
	return (
		<Form.Group className="col-md-6 mb-2">
			<Form.FloatingLabel
				htmlFor={name}
				className="labels">
				{label}
			</Form.FloatingLabel>
			<Select
				id={name}
				name={name}
				defaultValue={defaultValue}
				options={options}
				onChange={onChange}
				value={{ label: value }}
				autoFocus={true}
			/>
		</Form.Group>
	);
};

export default SelectForm;

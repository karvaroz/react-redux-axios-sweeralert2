import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100 bg-white">
			<Spinner
				animation="border"
				role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	);
};

export default LoadingSpinner;

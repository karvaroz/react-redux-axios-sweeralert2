import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { htmlRegexG } from "../utils/regex";
import moment from "moment";

const CardUser = ({ user }) => {
	const navigate = useNavigate();
	const {
		user_profile_image,
		SUBSCRIPTION,
		banner_message,
		CREATION_DATE,
		user_email,
	} = user.data;

	const dateFormatted = moment(CREATION_DATE).fromNow();

	return (
		<Card className="d-flex flex-row justify-content-center m-3 shadow customCard text-wrap">
			<Card.Img
				className="cardImage"
				variant="top"
				src={user_profile_image}
				alt={user_email}
			/>
			<Card.Body className="d-flex justify-content-between">
				<div className="textSection">
					<Card.Title className="fs-5">
						{banner_message?.replace(htmlRegexG, "")}
					</Card.Title>
					<Card.Text className="fs-6 lead">
						User since: {dateFormatted}
					</Card.Text>
				</div>
				<div className="d-flex flex-column align-items-end justify-content-between">
					<div className={`${SUBSCRIPTION} bagde`}>{SUBSCRIPTION}</div>
					<Button
						onClick={() => navigate(`/detail/${user.id}`)}
						variant="light"
						className="fw-light fs-6">
						More
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default CardUser;

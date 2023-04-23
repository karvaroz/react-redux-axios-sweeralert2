import React from "react";
import { Container } from "react-bootstrap";
import CardUser from "./CardUser";
import { htmlRegexG } from "../utils/regex";
import LoadingSpinner from "./LoadingSpinner";

const UserList = ({ users, loading, searchData }) => {
	if (loading) {
		return <LoadingSpinner />;
	}

	const filteredUsers = users.filter((user) => {
		if (searchData.length === 0) {
			return user;
		} else {
			return user?.data?.banner_message
				.replace(htmlRegexG, "")
				.toLowerCase()
				.includes(searchData.toLowerCase());
		}
	});

	return (
		<Container className="d-flex flex-column align-items-center justify-content-center">
			{users &&
				filteredUsers?.map((user) => (
					<CardUser
						key={user.id}
						user={user}
					/>
				))}
		</Container>
	);
};

export default UserList;

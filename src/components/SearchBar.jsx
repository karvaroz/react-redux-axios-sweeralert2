import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchUser } from "../redux/features/users/usersSlice";

const SearchBar = () => {
	const [searchData, setSearchData] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(searchUser(searchData));
	}, [searchData]);

	return (
		<Container
			fluid
			className="col-md-8 col-md-offset-2 text-center mt-5">
			<Form>
				<Form.Group className="input-group">
					<Form.Control
						type="text"
						className="search-input form-control text-center"
						placeholder="Type a name..."
						value={searchData}
						onChange={(e) => setSearchData(e.target.value)}
					/>
					<Button className="search-btn btn btn-default">
						<ion-icon name="search-outline"></ion-icon>
					</Button>
				</Form.Group>
			</Form>
		</Container>
	);
};

export default SearchBar;

import { Container } from "react-bootstrap";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/features/users/usersActions";

import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";

const Home = () => {
	const dispatch = useDispatch();
	const { users, loading, error, searchData } = useSelector(
		(state) => state.app
	);
	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

	return (
		<Container>
			<SearchBar />
			<UserList
				users={users}
				loading={loading}
				error={error}
				searchData={searchData}
			/>
		</Container>
	);
};

export default Home;

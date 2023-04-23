import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	Badge,
	Button,
	Col,
	Container,
	Form,
	Image,
	Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import moment from "moment";

import { useForm } from "../hooks/useForm";
import { deleteUser, getUserDetail, updateUser } from "../redux";
import { htmlRegexG, language, theme, subscription } from "../utils";
import { InputForm, SelectForm } from "../components";
import LoadingSpinner from "../components/LoadingSpinner";

const Detail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { data, setData, handleChange, handleChangeSelect } = useForm();

	const { userDetails, loading } = useSelector((state) => state.app);

	useEffect(() => {
		dispatch(getUserDetail(id));
	}, [id]);

	useEffect(() => {
		if (id) {
			setData(userDetails.data);
		}
	}, [userDetails]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedDate = { id, data };
		await Swal.fire({
			title: `Do you want to update this user?`,
			showCancelButton: true,
			confirmButtonText: "Update",
		}).then(async (result) => {
			if (result.isConfirmed) {
				await dispatch(updateUser(updatedDate))
					.then(() => {
						Swal.fire("Successfully Updated");
						navigate("/");
					})
					.catch((err) => Swal.fire("Error!", err));
			}
		});
	};

	const handleDelete = async (userId) => {
		await Swal.fire({
			title: `Do you want to unsubscribe this user?`,
			showCancelButton: true,
			confirmButtonText: "Delete",
		}).then(async (result) => {
			if (result.isConfirmed) {
				await dispatch(deleteUser(userId))
					.then(() => {
						Swal.fire("Successfully Deleted");
						navigate("/");
					})
					.catch((err) => Swal.fire("Error!", err));
			}
		});
	};

	if (loading) {
		return <LoadingSpinner />;
	}

	return (
		<Container className="container h-100 d-flex align-items-center justify-content-center">
			<Row>
				<Col md={3}>
					<Container className="d-flex flex-column align-items-center text-center p-3 py-5">
						<Image
							roundedCircle
							className="mt-5 user_profile_image"
							width={150}
							height={150}
							contain
							src={userDetails.data?.user_profile_image}
						/>
						<Badge
							className={`${userDetails?.data?.SUBSCRIPTION} text-white mt-2`}>
							{userDetails?.data?.SUBSCRIPTION?.toUpperCase()}
						</Badge>
						<Badge
							bg="secondary mb-3 mt-3"
							className="text-white">
							{userDetails?.data?.banner_message?.replace(htmlRegexG, "")}
						</Badge>
					</Container>
				</Col>
				<Col md={9}>
					<Form
						className="container p-3 py-5"
						onSubmit={handleSubmit}>
						<div className="d-flex justify-content-between align-items-center mb-3">
							<h4 className="text-right">Profile Settings</h4>
						</div>
						<Row>
							<InputForm
								label="TIMEZONE"
								type="text"
								value={data?.displayed_timezone}
								disabled={true}
								onChange={handleChange}
								name="displayed_timezone"
							/>
							<SelectForm
								label="SUBSCRIPTION"
								name="SUBSCRIPTION"
								defaultValue={data?.SUBSCRIPTION}
								options={subscription}
								onChange={handleChangeSelect}
								value={data?.SUBSCRIPTION}
							/>

							<SelectForm
								label="CODE LANGUAGE"
								name="language_code"
								defaultValue={data?.language_code}
								options={language}
								onChange={handleChangeSelect}
								value={data?.language_code}
							/>
						</Row>
						<Row className="mt-2">
							<SelectForm
								label="THEME"
								name="theme_name"
								defaultValue={data?.theme_name}
								options={theme}
								onChange={handleChangeSelect}
								value={data?.theme_name}
							/>
							<InputForm
								label="EMAIL"
								type="text"
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
								label="LAST PAYMENT DATE"
								type="text"
								value={
									data?.LAST_PAYMENT_DATE !== null
										? moment(data?.LAST_PAYMENT_DATE)?.format("LL")
										: "None registered"
								}
								Isdisabled="true"
								onChange={handleChange}
								name="LAST_PAYMENT_DATE"
							/>

							<InputForm
								label="USER REGISTERED SINCE"
								type="text"
								value={moment(data?.CREATION_DATE)?.format("LL")}
								disabled={true}
								onChange={handleChange}
								name="CREATION_DATE"
							/>
							<InputForm
								label="USER IMAGE"
								type="text"
								value={data?.user_profile_image}
								disabled={false}
								onChange={handleChange}
								name="user_profile_image"
							/>
						</Row>
						<Container className="mt-3 text-center d-flex justify-content-around">
							<Button
								variant="danger"
								onClick={() => handleDelete(userDetails.id)}>
								Unsubscribe
							</Button>
							<Button
								variant="primary"
								type="submit">
								Update
							</Button>
						</Container>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Detail;

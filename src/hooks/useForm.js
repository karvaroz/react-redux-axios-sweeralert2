import { useState } from "react";
import { getCurrentTimeISO, getUserTimeZone } from "../utils";

export const initialState = {
	SUBSCRIPTION: "",
	user_email: "",
	language_code: "",
	banner_message: "",
	theme_name: "",
	user_profile_image: "",
	ENABLED_FEATURES: {
		CERTIFICATES_INSTRUCTOR_GENERATION: false,
		ENABLE_COURSEWARE_SEARCH: false,
		ENABLE_EDXNOTES: false,
		ENABLE_DASHBOARD_SEARCH: false,
		INSTRUCTOR_BACKGROUND_TASKS: false,
		ENABLE_COURSE_DISCOVERY: false,
	},
	displayed_timezone: "" || getUserTimeZone(),
	CREATION_DATE: "" || getCurrentTimeISO(),
	LAST_PAYMENT_DATE: "",
};

export const useForm = () => {
	const [data, setData] = useState(initialState);

	const handleChange = ({ target }) => {
		setData({
			...data,
			[target.name]: target.value,
		});
	};

	const handleChangeSelect = (selectedOption) => {
		setData({
			...data,
			[selectedOption.name]: selectedOption.value,
		});
	};

	return { data, setData, handleChange, handleChangeSelect };
};

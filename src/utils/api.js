import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:8010/api/v1/customerdata",
	timeout: 5000,
});

export default api;

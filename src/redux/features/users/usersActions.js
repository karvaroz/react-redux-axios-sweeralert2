import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils";

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
	try {
		const response = await api.get();
		return response.data.results;
	} catch (error) {
		return error;
	}
});

export const getUserDetail = createAsyncThunk("getUserDetail", async (id) => {
	try {
		const response = await api.get(`/${id}`);
		return response.data;
	} catch (error) {
		return error;
	}
});

export const createUser = createAsyncThunk("createUser", async (userInfo) => {
	const userToCreate = {
		data: userInfo,
	};

	try {
		const response = await api.post("/", userToCreate);
		return response.data;
	} catch (error) {
		return error;
	}
});

export const deleteUser = createAsyncThunk("deleteUser", async (userId) => {
	try {
		const response = await api.delete(`/${userId}`);
		return response;
	} catch (error) {
		return error;
	}
});

export const updateUser = createAsyncThunk(
	"updateUser",
	async (updatedDate) => {
		try {
			const userToUpdate = {
				id: updatedDate.id,
				data: updatedDate.data,
			};
			const response = await api.put(`/${updatedDate.id}/`, userToUpdate);
			return response;
		} catch (error) {
			return error;
		}
	}
);

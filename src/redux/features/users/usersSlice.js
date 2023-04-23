import { createSlice } from "@reduxjs/toolkit";
import {
	createUser,
	deleteUser,
	getAllUsers,
	getUserDetail,
	updateUser,
} from "./usersActions";

const initialState = {
	users: [],
	loading: false,
	error: null,
	searchData: [],
	userDetails: {},
	userCreated: {},
};

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		searchUser: (state, action) => {
			state.searchData = action.payload;
		},
	},
	extraReducers: {
		[getAllUsers.pending]: (state) => {
			state.loading = true;
		},
		[getAllUsers.fulfilled]: (state, action) => {
			state.loading = false;
			state.users = action.payload;
		},
		[getAllUsers.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		[getUserDetail.pending]: (state) => {
			state.loading = true;
		},
		[getUserDetail.fulfilled]: (state, action) => {
			state.loading = false;
			state.userDetails = action.payload;
		},
		[getUserDetail.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		[createUser.pending]: (state) => {
			state.loading = true;
		},
		[createUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.userCreated = action.payload;
		},
		[createUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		[deleteUser.pending]: (state) => {
			state.loading = true;
		},
		[deleteUser.fulfilled]: (state) => {
			state.loading = false;
		},
		[deleteUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		[updateUser.pending]: (state) => {
			state.loading = true;
		},
		[updateUser.fulfilled]: (state) => {
			state.loading = false;
		},
		[updateUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { searchUser } = usersSlice.actions;

export default usersSlice.reducer;

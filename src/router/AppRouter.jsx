import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Detail, Home } from "../pages";
import { NavigationBar } from "../components";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavigationBar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/detail/:id"
					element={<Detail />}
				/>
				<Route
					path="/*"
					element={<Navigate to="/" />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;

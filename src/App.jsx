import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//import MiPrimerComponente from "@components/MiPrimerComponente";
import NotFoundPage from "@pages/NotFoundPage";
import HomePage from "@pages/HomePage";
import Recognition from "./pages/Recognition";

function App() {
	return (
		<Routes>
			{/* Definir la ruta de la página de inicio */}
			<Route exact path="/" element={<HomePage />} />
			{/* Otras rutas */}
			<Route exact path="/recognition" element={<Recognition />} />

			{/* Ruta por defecto en caso de que ninguna coincida */}
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;

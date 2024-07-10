import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Personajes } from "./views/personajes";
import { Vehiculos } from "./views/vehiculos";
import { Planetas } from "./views/planetas";
import { InfoPersonaje } from "./views/infoPersonaje";
import { InfoPlaneta } from "./views/infoPlanetas";
import { InfoVehiculo } from "./views/infoVehiculos";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personajes" element={<Personajes />} />
						<Route path="/vehiculos" element={<Vehiculos />} />
						<Route path="/planetas" element={<Planetas />} />
						<Route path="/info_personaje/:id/:personaje_name" element={<InfoPersonaje />} />
						<Route path="/info_planeta/:id/:planeta_name" element={<InfoPlaneta />} />
						<Route path="/info_vehiculo/:id/:vehiculo_name" element={<InfoVehiculo />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

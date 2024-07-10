import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { CardComponent } from "../component/CardComponent";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swiper from 'swiper';

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { id, personaje_name } = useParams();

	useEffect(() => {
		const swiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto', // Mostrará tantos slides como quepan en el contenedor
			spaceBetween: 10, // Espacio entre las tarjeta

		});
	}, []);

	return (

		<div className="text-center container-fluid">
			<p className="text-warning text-start ms-5 fs-1">Personajes</p>
			<div className="mt-4 bloque-card-mobile fade-in ms-5">

				<div className="swiper-container-paginas">
					<div className="swiper-wrapper-paginas scrollableDiv-paginas d-flex mb-5">
						{store.people && (
							store.people.map((personaje, index) => (
								<div className='swiper-slide-paginas ps-4 pt-3 personajes fade-in'>
									<CardComponent key={index} title={personaje.name} paginaIndividual={`/info_personaje/${personaje.uid}/${personaje.name}`} info={''} favourite={store.favoritos?.includes(personaje.name)? null : () => actions.addFavourite(personaje.name)} corazon={store.favoritos?.includes(personaje.name)
										? <i className="fa-solid fa-heart"></i>
										: <i className="fa-regular fa-heart"></i>} img={
											personaje.name === "Luke Skywalker" ? 'https://starwars-visualguide.com/assets/img/characters/1.jpg'
												: personaje.name === "C-3PO" ? 'https://starwars-visualguide.com/assets/img/characters/2.jpg'
													: personaje.name === "R2-D2" ? 'https://starwars-visualguide.com/assets/img/characters/3.jpg'
														: personaje.name === "Darth Vader" ? 'https://starwars-visualguide.com/assets/img/characters/4.jpg'
															: personaje.name === "Leia Organa" ? 'https://starwars-visualguide.com/assets/img/characters/5.jpg'
																: personaje.name === "Owen Lars" ? 'https://starwars-visualguide.com/assets/img/characters/6.jpg'
																	: personaje.name === "Beru Whitesun lars" ? 'https://starwars-visualguide.com/assets/img/characters/7.jpg'
																		: personaje.name === "R5-D4" ? 'https://starwars-visualguide.com/assets/img/characters/8.jpg'
																			: personaje.name === "Biggs Darklighter" ? 'https://starwars-visualguide.com/assets/img/characters/9.jpg'
																				: personaje.name === "Obi-Wan Kenobi" ? 'https://starwars-visualguide.com/assets/img/characters/10.jpg'
																					: ''
										} />

								</div>
							)))}
					</div>
				</div>
			</div>

			<p className="text-warning text-start ms-5 fs-1">Vehículos</p>
			<div className="mt-4 bloque-card-mobile fade-in ms-5">

				<div className="swiper-container-paginas">
					<div className="swiper-wrapper-paginas scrollableDiv-paginas d-flex mb-5">
						{store.vehicle && (
							store.vehicle.map((vehiculo, index) => (
								<div className='swiper-slide-paginas vehicles ps-4 pt-3'>
									<CardComponent key={index} title={vehiculo.name} paginaIndividual={`/info_vehiculo/${vehiculo.uid}/${vehiculo.name.replace(/[/]/gi, "-")}`} info={''} favourite={store.favoritos?.includes(vehiculo.name)? '' : () => actions.addFavourite(vehiculo.name)} corazon={store.favoritos?.includes(vehiculo.name)
										? <i className="fa-solid fa-heart"></i>
										: <i className="fa-regular fa-heart"></i>}  img={
										vehiculo.name === "Sand Crawler" ? 'https://starwars-visualguide.com/assets/img/vehicles/4.jpg'
											: vehiculo.name === "X-34 landspeeder" ? 'https://starwars-visualguide.com/assets/img/vehicles/7.jpg'
												: vehiculo.name === "T-16 skyhopper" ? 'https://starwars-visualguide.com/assets/img/vehicles/6.jpg'
													: vehiculo.name === "TIE/LN starfighter" ? 'https://starwars-visualguide.com/assets/img/vehicles/8.jpg'
														: vehiculo.name === "Snowspeeder" ? 'https://starwars-visualguide.com/assets/img/vehicles/14.jpg'
															: vehiculo.name === "AT-AT" ? 'https://starwars-visualguide.com/assets/img/vehicles/18.jpg'
																: vehiculo.name === "TIE bomber" ? 'https://starwars-visualguide.com/assets/img/vehicles/16.jpg'
																	: vehiculo.name === "AT-ST" ? 'https://starwars-visualguide.com/assets/img/vehicles/19.jpg'
																		: vehiculo.name === "Storm IV Twin-Pod cloud car" ? 'https://starwars-visualguide.com/assets/img/vehicles/20.jpg'
																			: vehiculo.name === "Sail barge" ? 'https://starwars-visualguide.com/assets/img/vehicles/24.jpg'
																				: ''
									}
									/>
								</div>
							)))}
					</div>
				</div>
			</div>

			<p className="text-warning text-start ms-5 fs-1">Planetas</p>
			<div className="mt-4 bloque-card-mobile fade-in ms-5">

				<div className="swiper-container-paginas">
					<div className="swiper-wrapper-paginas scrollableDiv-paginas d-flex">
						{store.planets && (
							store.planets.map((planeta, index) => (
								<div className='swiper-slide-paginas planets ps-4 pt-3 fade-in'>
									<CardComponent key={index} title={planeta.name} favourite={store.favoritos?.includes(planeta.name)? '' : () => actions.addFavourite(planeta.name)} paginaIndividual={`/info_planeta/${planeta.uid}/${planeta.name}`} corazon={store.favoritos?.includes(planeta.name)
										? <i className="fa-solid fa-heart"></i>
										: <i className="fa-regular fa-heart"></i>}  info={''} img={
										planeta.name === 'Tatooine' ? 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357'
											: planeta.name === 'Alderaan' ? 'https://starwars-visualguide.com/assets/img/planets/2.jpg'
												: planeta.name === 'Yavin IV' ? 'https://starwars-visualguide.com/assets/img/planets/3.jpg'
													: planeta.name === 'Hoth' ? 'https://starwars-visualguide.com/assets/img/planets/4.jpg'
														: planeta.name === 'Dagobah' ? 'https://starwars-visualguide.com/assets/img/planets/5.jpg'
															: planeta.name === 'Bespin' ? 'https://starwars-visualguide.com/assets/img/planets/6.jpg'
																: planeta.name === 'Endor' ? 'https://starwars-visualguide.com/assets/img/planets/7.jpg'
																	: planeta.name === 'Naboo' ? 'https://starwars-visualguide.com/assets/img/planets/8.jpg'
																		: planeta.name === 'Coruscant' ? 'https://starwars-visualguide.com/assets/img/planets/9.jpg'
																			: planeta.name === 'Kamino' ? 'https://starwars-visualguide.com/assets/img/planets/10.jpg'
																				: ''
									} />
								</div>
							)))}
					</div>
				</div>
			</div>
		</div>
	)
};
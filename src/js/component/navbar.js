import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import '../../styles/index.css'
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);


	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item d-flex align-items-center">
								<Link className="nav-link text-light fs-4" to="/">Home</Link>
								<span className="text-secondary">|</span>
							</li>
							<li className="nav-item d-flex align-items-center">
								<Link className="nav-link text-light fs-4" to="/personajes">Personajes</Link>
								<span className="text-secondary">|</span>
							</li>

							<li className="nav-item d-flex align-items-center">
								<Link className="nav-link text-light fs-4" to="/vehiculos">Vehículos</Link>
								<span className="text-secondary">|</span>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-light fs-4" to="/planetas">Planetas</Link>
							</li>
						</ul>
						<div className="btn-group" role="group" aria-label="Button group with nested dropdown ">

							<div className="btn-group" role="group">
								<button type="button" className="btn btn-warning dropdown-toggle me-3" data-bs-toggle="dropdown" aria-expanded="false">
									Favoritos <span className="bg-secondary px-1 rounded text-light">{store.favoritos.length}</span>
								</button>
								<ul className="dropdown-menu p-3">
									{store.favoritos && store.favoritos.length > 0 ? (
										store.favoritos.map((fav, index) => (
											<div key={index} className="d-flex align-items-center justify-content-between">
												<li className="pb-1">
													{fav}
												</li>
												<button onClick={() => actions.deleteFavourite(index)} className="btn"><i class="fa-solid fa-trash"></i></button>
											</div>
										))) : 'Sin favoritos'}
								</ul>
							</div>
						</div>
						<form className="d-flex" role="search">
							<input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
							<button className="btn btn-outline-warning" type="submit">Buscar</button>
						</form>
					</div>
				</div >
			</nav >
			<div className="d-flex justify-content-center">
				<img className="mb-5" src="https://seeklogo.com/images/S/star-wars-logo-886FACEAFF-seeklogo.com.png" />
			</div>
		</>
	);
};
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


export const InfoVehiculo = () => {
    const { store, actions } = useContext(Context);
    const { id, vehiculo_name } = useParams();

    useEffect(() => {
        actions.fetchOneVehicle(id)
    }, [id])

    const vehiculo = store.singleVehicle.result ? store.singleVehicle.result.properties : null;

    if (!vehiculo) {
        return <div className="text-light text-center fs-2">Cargando data del vehículo...</div>;
    }

    return (
        <div>
            <h1 className="text-warning text-center display-1">{vehiculo.name}</h1>
            <div className="d-flex gap-2 flex-wrap container-fluid tarjeta-info p-5 w-75 rounded">
                <div>
                    <img className="rounded" src={
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
                    } />
                </div>
                <div className="fs-4 ms-5">
                    <p><strong>Modelo:</strong> {vehiculo.model}</p>
                    <p><strong>Clase:</strong> {vehiculo.vehicle_class}</p>
                    <p><strong>Fabricante:</strong> {vehiculo.manufacturer}</p>
                    <p><strong>Costo:</strong> {vehiculo.cost_in_credits} créditos</p>
                    <p><strong>Largo:</strong> {vehiculo.length} mts.</p>
                    <p><strong>Tripulación:</strong> {vehiculo.crew}</p>
                    <p><strong>Pasajeros:</strong> {vehiculo.passengers}</p>
                    <p><strong>Velocidad máxima atmosférica:</strong> {vehiculo.max_atmosphering_speed}</p>
                    <p><strong>Capacidad de carga:</strong> {vehiculo.cargo_capacity}</p>
                    <p><strong>Consumibles:</strong> {vehiculo.consumables}</p>
                    <p><strong>Descripción:</strong> {store.singleVehicle.result.description}</p>
                    <div className="d-flex gap-4 align-items-start mt-5">
                        <Link to="/" className="btn btn-warning fw-bold">Back to Home</Link>
                        <button onClick={store.favoritos?.includes(vehiculo.name) ? null : () => actions.addFavourite(vehiculo.name)} className="btn btn-warning">{store.favoritos?.includes(vehiculo.name)
                            ? <i className="fa-solid fa-heart"></i>
                            : <i className="fa-regular fa-heart"></i>}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
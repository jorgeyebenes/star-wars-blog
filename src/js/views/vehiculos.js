import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardComponent } from "../component/CardComponent";


export const Vehiculos = () => {
    const { store, actions } = useContext(Context);


    return (
        <>
        <p className="text-warning text-center display-1">Vehículos</p>
        <div className="d-flex mb-5 flex-wrap text-center justify-content-center">
                    {store.vehicle && (
                        store.vehicle.map((vehiculo, index) => (
                            <div className='swiper-slide-paginas vehicles ps-4 pt-3'>
                                <CardComponent key={index} title={vehiculo.name} favourite={store.favoritos?.includes(vehiculo.name)? '' : () => actions.addFavourite(vehiculo.name)} corazon={store.favoritos?.includes(vehiculo.name)
										? <i className="fa-solid fa-heart"></i>
										: <i className="fa-regular fa-heart"></i>} paginaIndividual={`/info_vehiculo/${vehiculo.uid}/${vehiculo.name}`} info={''} img={
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
           

        </>
    )
}
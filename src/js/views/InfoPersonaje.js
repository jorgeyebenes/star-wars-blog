import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";



export const InfoPersonaje = () => {
    const { store, actions } = useContext(Context);
    const { id, personaje_name } = useParams();

    useEffect(() => {
        actions.fetchOneCharacter(id)
    }, [id])

    const personaje = store.singleCharacter.result ? store.singleCharacter.result.properties : null;

    if (!personaje) {
        return <div className="text-light text-center fs-2">Cargando data del personaje...</div>;
    }

    return (
        <div>
            <h1 className="text-warning text-center display-1">{personaje.name}</h1>
            <div className="d-flex gap-2 flex-wrap container-fluid tarjeta-info p-5 w-75 rounded">
                <div>
                    <img className="rounded" src={
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
                <div className="fs-4 ms-5">
                    <p><strong>Altura:</strong> {personaje.height} cm</p>
                    <p><strong>Masa:</strong> {personaje.mass}</p>
                    <p><strong>Color de pelo:</strong> {personaje.hair_color}</p>
                    <p><strong>Color de piel:</strong> {personaje.skin_color}</p>
                    <p><strong>Color de ojos:</strong> {personaje.eye_color}</p>
                    <p><strong>Año de nacimiento:</strong> {personaje.birth_year}</p>
                    <p><strong>Género:</strong> {personaje.gender}</p>
                    <p><strong>Descripción:</strong> {store.singleCharacter.result.description}</p>
                    <div className="d-flex gap-4 align-items-start mt-5">
                        <Link to="/" className="btn btn-warning fw-bold">Back to Home</Link>
                        <button onClick={store.favoritos?.includes(personaje.name) ? null : () => actions.addFavourite(personaje.name)} className="btn btn-warning">{store.favoritos?.includes(personaje.name)
                            ? <i className="fa-solid fa-heart"></i>
                            : <i className="fa-regular fa-heart"></i>}</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
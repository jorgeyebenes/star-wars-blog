import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardComponent } from "../component/CardComponent";


export const Personajes = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <p className="text-warning text-center display-1">Personajes</p>
            <div className="d-flex mb-5 flex-wrap text-center justify-content-center">
                {store.people && (
                    store.people.map((personaje, index) => (
                        <div className='ps-4 pt-3 personajes fade-in'>
                            <CardComponent key={index} title={personaje.name} paginaIndividual={`/info_personaje/${personaje.uid}/${personaje.name}`} favourite={store.favoritos?.some(fav => fav.id === personaje.uid) ? null : () => actions.addFavourite(personaje.name, personaje.uid, personaje.description)} 
									corazon={store.favoritos?.some(fav => fav.id === personaje.uid)
										? <i className="fa-solid fa-heart"></i>
										: <i className="fa-regular fa-heart"></i>} info={''} img={
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
        </>
    )
}
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardComponent } from "../component/CardComponent";

export const Planetas = () => {
    const { store, actions } = useContext(Context);


    return (
        <>
            <p className="text-warning text-center display-1">Planetas</p>
            <div className="d-flex mb-5 flex-wrap text-center justify-content-center">
                {store.planets && (
                    store.planets.map((planeta, index) => (
                        <div className='swiper-slide-paginas planets ps-4 pt-3 fade-in'>
                            <CardComponent key={index} title={planeta.name} favourite={store.favoritos?.includes(planeta.name)? '' : () => actions.addFavourite(planeta.name)} corazon={store.favoritos?.includes(planeta.name)
										? <i className="fa-solid fa-heart"></i>
										: <i className="fa-regular fa-heart"></i>} info={''} paginaIndividual={`/info_planeta/${planeta.uid}/${planeta.name}`} img={
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
 
        </>
    )
}
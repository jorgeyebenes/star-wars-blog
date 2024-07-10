const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			singleCharacter: [],
			vehicle:[],
			singleVehicle:[],
			planets:[],
			singlePlanet:[],
			favoritos: JSON.parse(localStorage.getItem("favoritos")) || []
		},
		actions: {
			addFavourite: (favorito) => {
				const store = getStore();
				const nuevosFavoritos = [...store.favoritos, favorito];
				setStore({ favoritos: nuevosFavoritos });
				localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
			},
			deleteFavourite: (indexDelete) => {
				const store = getStore();
				const nuevosFavoritos = store.favoritos.filter((_, index) => index !== indexDelete);
                setStore({ favoritos: nuevosFavoritos });
                localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
			},

			fetchPeople: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/people', {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Datos recibidos de la API:", data); 
						setStore({ people: data.results}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchOneCharacter: async (id) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/people/${id}`, {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Datos de un personaje:", data); 
						setStore({ singleCharacter: data}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchVehicle: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/vehicles', {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Datos recibidos de la API:", data); 
						setStore({ vehicle: data.results}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchOneVehicle: async (id) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/vehicles/${id}`, {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Datos de un vehículo:", data); 
						setStore({ singleVehicle: data}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchPlanets: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/planets', {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Datos recibidos de la API:", data); 
						setStore({ planets: data.results}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchOnePlaneta: async (id) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/planets/${id}`, {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Datos de un planeta:", data); 
						setStore({ singlePlanet: data}); 
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
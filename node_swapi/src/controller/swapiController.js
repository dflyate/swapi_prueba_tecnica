const fetch = require('node-fetch')
const controller = {} 
const URL = 'https://swapi.py4e.com/api/'

controller.listar = (req,res) => { 
    fetch(URL)
    .then(promesa => promesa.json())
    .then(body => {

        body = [body]
        var body = body.map( item => { 
            return { 'películas':item.films, 'personas':item.people,'planetas':item.planets,
                     'especies':item.species,'naves estelares':item.starships,'vehículos':item.vehicles}; 
          });
        body = JSON.stringify(body[0])
        res.json(JSON.parse(body))
    });
}; 

controller.buscarPersona = (req,res) => { 
    const {id} = req.params;
    fetch(URL+'/people/'+id)
    .then(promesa => promesa.json())
    .then(body => {
        body = [body]
        var body = body.map( item => { 
            return { 'año de nacimiento': item.birth_year, 'color de ojos':item.eye_color,
                     'películas':item.films,'género':item.gender,'color de cabello':item.hair, 
                     'altura':item.height,'mundo natal':item.homeworld,'masa':item.mass,'nombre':item.name,
                     'color de piel':item.skin_color,'creado':item.created,'editado':item.edited,
                     'especies':item.species,'naves estelares':item.starships,'url':item.url,
                     'vehículos':item.vehicles,}; 
          });
        body = JSON.stringify(body[0])
        res.json(JSON.parse(body))
    });
}; 


controller.buscarPelicula = (req,res) => { 
    const {id} = req.params;
    fetch(URL+'/films/'+id)
    .then(promesa => promesa.json())
    .then(body => {

        body = [body]
        var body = body.map( item => { 
            return { 'protagonistas':item.characters,'creado':item.created,'director':item.director,
                     'editado':item.edited,'número de episodio':item.episode_id,'rastreo de apertura':item.opening_crawl,
                     'planetas':item.planets,'productor':item.producer, 'fecha de realización':item.release_date,
                     'especies':item.species,'naves estelares':item.starships,'título': item.title,'url':item.url, 
                     'vehículos':item.vehicles,}; 
          });
        body = JSON.stringify(body[0])
        res.json(JSON.parse(body))
    });
}; 

controller.buscarNave = (req,res) => { 
    const {id} = req.params;
    fetch(URL+'/starships/'+id)
    .then(promesa => promesa.json())
    .then(body => {

        body = [body]
        var body = body.map( item => { 
            return {  MGLT:item.MGLT,'capacidad de carga':item.cargo_capacity,'consumibles':item.consumables,
                     'costo en créditos':item.cost_in_credits,'creado':item.created,'tripulación':item.crew,
                     'editado':item.edited,'calificación del hiperimpulsor':item.hyperdrive_rating,
                     'longitud':item.length,'fabricante':item.manufacturer, 'velocidad atmosférica máxima':item.max_atmosphering_speed,
                     'modelo':item.model,'nombre': item.name, 'pasajeros':item.passengers,'películas':item.films,
                     'pilotos':item.pilots,'clase de nave':item.starship_class,url:item.url }; 
          });
        body = JSON.stringify(body[0])
        res.json(JSON.parse(body))
    });
}; 

controller.buscarPlaneta = (req,res) => { 
    const {id} = req.params;
    fetch(URL+'/planets/'+id)
    .then(promesa => promesa.json())
    .then(body => {

        body = [body]
        var body = body.map( item => { 
            return { 'clima':item.climate,'creado':item.created,'diámetro':item.diameter,'editado':item.edited,
                     'películas':item.films,'gravedad':item.gravity,'nombre': item.name, 'periodo de órbita':item.orbital_period, 
                     'población':item.population,'residentes':item.residents,'periodo de rotación':item.rotation_period,
                     'superficie del agua':item.surface_water,'terreno':item.terrain,url:item.url}; 
          });
        body = JSON.stringify(body[0])
        res.json(JSON.parse(body))
    });
}; 

module.exports = controller;
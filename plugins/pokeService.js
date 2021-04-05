// Imports
import configService from './config';

// Objeto de servicios de pokemons
let pokeService = {};

// Añadir endpoint para obtener todos los pokemon
pokeService.spritesUrl = configService.spritesUrl;
pokeService.all = function(limit, offset){
    return fetch(configService.apiUrl + 'pokemon/?limit=' + limit + '&offset=' + offset);
}
pokeService.pokemonByName = function(pokename){
    return fetch(configService.apiUrl + 'pokemon/' + pokename);
}

// Export data
export default pokeService;
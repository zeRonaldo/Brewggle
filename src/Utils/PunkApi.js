import axios from 'axios'


export const API =  axios.create({
        baseURL: `https://api.punkapi.com/v2`,
        responseType: 'json'
    }) 


export async function searchBeers (query, query_type) {
    let beers;
   
    await API.get(`beers?${query_type}=${query}&per_page=80`)
        .then(
           async (response) => {
                beers = response.data.map(
                    (beer) => {
                        return {
                            id: beer.id,
                            name: beer.name,
                            tagline: beer.tagline,
                            first_brewed: beer.first_brewed,
                            abv: beer.abv,
                            description: beer.description,
                            image_url: beer.image_url,
                            yeast: beer.ingredients.yeast,
                            food_pairing: beer.food_pairing,
                            brewers_tips: beer.brewers_tips
                        }
                    })
                ;        
        })
        .catch(
            (e) => {
                beers = null
                return null
            }
        )
        return await beers
} 


export async function searchAllBeers () {
    let beers
    await API.get(`beers?per_page=80`)
        .then(
            (response) => {
                beers = response.data.map(
                    (beer) => {
                        return {
                            id: beer.id,
                            name: beer.name,
                            tagline: beer.tagline,
                            first_brewed: beer.first_brewed,
                            abv: beer.abv,
                            description: beer.description,
                            image_url: beer.image_url,
                            yeast: beer.ingredients.yeast,
                            food_pairing: beer.food_pairing,
                            brewers_tips: beer.brewers_tips
                        }
                    })
                ;
                
                
        })
        .catch(
            (e) => {
                beers= null
                return null
            }
        )
        return await beers;
} 


export async function getBeer (id) {
    let beer 
    await API.get(`beers/${id}`)
        .then(
            (response) => {
                beer = {
                            ...response.data
                        };
                return beer;
        })
        .catch(
            (e) => {
                beer = null
                return null
            }
        )
        return await beer

} 


export async function getRandomBeer (id) {
    let beer 
    await API.get(`beers/random`)
        .then(
            (response) => {
                beer = {
                            ...response.data
                        };
                return beer;
        })
        .catch(
            (e) => {
                beer = null
                return null
            }
        )
        return await beer

} 

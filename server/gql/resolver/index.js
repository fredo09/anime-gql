/**
*   Resolvers Gql 
**/

// imports
const { registerAnime, getAnimes } = require('./../../controllers/Anime');

const resolvers = {
    Query: {
        // Anime
        /*getAnime: () => {
            console.log("Anime listo");
            return null;
        },*/
        getAnimes: () => getAnimes()
    },
    Mutation: {
        newAnime: (_, { input } ) => registerAnime ( input ),
    }
}

module.exports = resolvers;
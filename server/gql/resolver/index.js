/**
*   Resolvers Gql 
**/

const resolvers = {
    Query: {
        // Anime
        getAnime: () => {
            console.log("Anime listo");
            return null;
        }
    },
}

module.exports = resolvers;
/**
*   Schemas Gql 
**/

const { gql } = require('apollo-server');

const typeDefs = gql`
    #mensaje de prueba
    type Anime {
        id: ID
        name: String
        image: String
        anioCreacion: String
        autor: String
        descripcion: String
    }

   type Query {
       # Anime
        getAnime: Anime
    }
`;

module.exports = typeDefs;
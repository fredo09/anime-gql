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

    input AnimeInput {
        name: String!
        anioCreacion: String!
        autor:String!
        descripcion: String!
    }

   type Query {
       # Anime
        getAnimes: [Anime]
    }

    type Mutation{
        newAnime (input: AnimeInput) : Anime
    }
`;

module.exports = typeDefs;
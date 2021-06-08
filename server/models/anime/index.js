/**
* Anime Schema 
**/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const AnimeSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        trim: true
    },
    anioCreacion: {
        type: String,
        trim: true
    },
    autor: {
        type: String,
        trim:true
    },
    descripcion: {
        type: String
    }
});

module.exports = mongoose.model("Animes", AnimeSchema);

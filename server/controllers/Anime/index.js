/**
*   Controller de Modelo Anime 
**/

const Anime = require('./../../models/Anime');

const registerAnime = ({ name, anioCreacion, autor, descripcion }) => {
    try {
        const newAnime = new Anime({
            name,
            anioCreacion,
            autor,
            descripcion
        });
        newAnime.save();
        return newAnime;
    } catch (err) {
        console.log('Ocurrio un error al registrar el usuario', err)
    }
}

const getAnimes = async () => {
    const listAnimes = await Anime.find({}).limit(100);

    if (!listAnimes) throw new Error('No se encontraron animes');
    
    return listAnimes;
}

module.exports = {
    registerAnime,
    getAnimes
}
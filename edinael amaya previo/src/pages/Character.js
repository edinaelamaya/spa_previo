import getHash from '../utils/getHash'
import getData from '../utils/getData'
const Character = async () => {
    const id= getHash();
    const character = await getData(id);  
    const {image, name, pelicula, poster_path,adulto,original_language} = movie;
    const view=`
    <div class="Character-inner">
    <article class="Characters-card">
	<img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
	<h3 class="titulo">${movie.title}</h3>
    <h2>${movie.name}</h2>
    </article>
    <article class="Characters-card">
    <h3>pelicula: <span> ${pelicula.length}</span></h3>
    <h3>Status: <span> ${status} </span></h3>
    <h3>adulto:<span> ${adulto.image}</span></h3>
    <h3>Gender: <span> ${gender}</span></h3>
    <h3>Origin:<span> ${movie.name}</span></h3>
    <h3>Last Location: <span> ${location.name} </span></h3>
    </article>
    </div>
    `;
    return view;
    
};

export default Character;
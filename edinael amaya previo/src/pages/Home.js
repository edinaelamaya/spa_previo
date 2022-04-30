import getData from '../utils/getData'

const Home = async() => {

    const characters= await getData();

    const view =`
    <div class="Characters">
        ${
        characters.results.map(character => `
            <article class="Character-item">
            <div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
						<h3 class="titulo">${movie.title}</h3>
					</div>
            </article>
            `).join('')
        }
    </div>
    `
    return view;
};
export default Home;
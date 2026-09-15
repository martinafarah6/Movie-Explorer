import './Favorites.css';
import {getGenreNames } from "../../services/movieApi";
function Favorites({favs=[]})
{
    return(
        <section id="fav">
            <h2>Favorites</h2>
            {favs.length===0&&<h3 className='warnning'>NO Favorite Films are Selected ....</h3>}
            {favs.map(movie=>(
                <section key={movie.id} className='movieContent'>
                    <img className="film"src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    <div className='mcontent'>
                        <h4 id='rate'>{movie.vote_average} ⭐</h4>
                        <h3>{movie.title}</h3>
                        <h4 className='h4'>Type: {getGenreNames(movie.genre_ids).join(", ")}</h4>
                        <h4 className='h4'>Year: {movie.release_date}</h4>
                        <p>Description: {movie.overview}</p>
                    </div>
                </section>
            ))}
        </section>
    )
}
export default Favorites;

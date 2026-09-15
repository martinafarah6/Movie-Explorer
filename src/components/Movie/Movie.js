import './Movie.css';
import { useState, useEffect } from 'react';
import { getMovies, getGenreNames } from "../../services/movieApi";


export default function Movie({fav,setFav})
{
    const [apiMovies, setApiMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDetails, setShowDetails] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState("All");
    useEffect(() => {
    getMovies()
        .then((data) => {
            setApiMovies(data.results);
            setLoading(false);
        })
        .catch(() => {
            setError("Failed to load movies.");
            setLoading(false);
        });
    }, []);
    const handleShow = (id) => {
        if (showDetails === id) {
            setShowDetails(null);
        } else {
            setShowDetails(id);
        }
    };

    const handlefav = (movie) => {
        if (fav.some(item => item.id === movie.id)) {
            handleDel(movie.id);
        } else {
            handleAdd(movie);
        }
    };

    const handleAdd = (movie) => {
        setFav([...fav, movie]);
    };

    const handleDel = (id) => {
        setFav(fav.filter(movie => movie.id !== id));
    };
    
    return(
        <section id="movie">
            <h2>Movies</h2>
            <ul>
                <li><button onClick={()=>setSelectedGenre("All")}>All</button></li>
                <li><button onClick={()=>setSelectedGenre("Action")}>Action</button></li>
                <li><button onClick={()=>setSelectedGenre("Comedy")}>Comedy</button></li>
                <li><button onClick={()=>setSelectedGenre("Drama")}>Drama</button></li>
                <li><button onClick={()=>setSelectedGenre("Horror")}>Horror</button></li>
                <li><button onClick={()=>setSelectedGenre("Romance")}>Romance</button></li>
                <li><button onClick={()=>setSelectedGenre("Thriller")}>Thriller</button></li>
                <li><button onClick={()=>setSelectedGenre("Mystery")}>Mystery</button></li>
                <li><button onClick={()=>setSelectedGenre("Science Fiction")}>Science Fiction</button></li>
                <li><button onClick={()=>setSelectedGenre("Fantasy")}>Fantasy</button></li>
                <li><button onClick={()=>setSelectedGenre("Adventure")}>Adventure</button></li>
                <li><button onClick={()=>setSelectedGenre("Crime")}>Crime</button></li>
                <li><button onClick={()=>setSelectedGenre("War")}>War</button></li>
                <li><button onClick={()=>setSelectedGenre("Animation")}>Animation</button></li>
                <li><button onClick={()=>setSelectedGenre("Family")}>Family</button></li>
                <li><button onClick={()=>setSelectedGenre("Documentary")}>Documentary</button></li>
            </ul>
            {
                loading ?
                <p className='warnning'>Loading Movies...</p>:
                error?(<p className='warnning'>{error}</p>):
                (apiMovies.map(movie=>(
                    (selectedGenre === "All" || getGenreNames(movie.genre_ids).includes(selectedGenre))
                    &&
                    <div key={movie.id} className='movieContent'>
                        <img className="film" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="500px"/>
                        <div className='mcontent'>
                            <h4 id="rate">{movie.vote_average} ⭐</h4>
                            <h3>{movie.title}</h3>
                            <h4 className='h4'>{getGenreNames(movie.genre_ids).join(", ")}</h4>
                            {
                                showDetails === movie.id &&
                                <>
                                    <h4 className='h4'>Year: {movie.release_date}</h4>
                                    <p>{movie.overview}</p>
                                </>
                            }
                        </div>
                        <button className='heart'  onClick={() => handlefav(movie)}><img src={
                            fav.some(item => item.id === movie.id)?
                            "https://i.pinimg.com/736x/ac/a2/8d/aca28d37458a2dc9c7b0b5f66d087a8d.jpg"
                            : "https://i.pinimg.com/736x/e5/8e/29/e58e29f52a707f7841f1545d8ffeca6f.jpg"} alt="heart" width="20px"/></button>
                        <button className='details' onClick={() => handleShow(movie.id)}>{showDetails === movie.id ? "Hide Details" : "Details"}</button>
                    </div>
                )))}
        </section>
    )
}

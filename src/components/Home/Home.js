import './Home.css';
import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <section id="home">
            <h2>Discover Your Next Favorite Movie</h2>
            <p id='last'>The Latest Movies of 2026  |  2027  | Highly Rated | High Quality </p>
            <p id="explore">Explore a world of movies, discover new stories, and find your next favorite film</p>
            <button><Link id="butt" to="/movies">Explore Movies</Link></button>
            <button><Link id="butt" to="/favorites">View Favorites</Link></button>
        </section>
    )
}

export default Home;

import './Header.css';
import { Link } from "react-router-dom";
function Header()
{
    return(
        <header>
            <h1><span>NEW</span> MOVIE</h1>
            <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
                <li><Link to="/login">LogIn</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/search"><img src="https://i.pinimg.com/736x/cd/ed/e6/cdede6fe9d0081a3ebd7d6625d236b91.jpg" alt="search"  width="30px" /></Link></li>
            </ul>
            </nav>
        </header>
    )
}
export default Header;

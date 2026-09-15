import {Header,Home,Login,Movie,Favorites,Search,Contact,Footer} from './components';
import { useState } from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
function App()
{
    const [arr,setArr]=useState([]);
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/movies" element={<Movie fav={arr} setFav={setArr}/>}/>
                <Route path="/favorites" element={<Favorites favs={arr}/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default App;

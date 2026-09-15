import './Search.css';
import { useState } from 'react';
import { searchMovies, getGenreNames } from "../../services/movieApi";
export default function Search()
{ 

    const [result,setresult]=useState([]);
    const [select,setSelect]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const handleClick=async(value)=>{
        if(value.trim()===""){
            setresult([]);
            setError(null);
            setLoading(false);
            return;
        }
        setLoading(true);
        setError(null);
        try{
            const data=await searchMovies(value);
            setresult(data.results);
        }
        catch(error){
            setError("Failed to search movies.");
            setresult([]);
        }
        setLoading(false);
    }   
    
    return(
        <section id="search">
            <h2>Search</h2>
            <input type="search" placeholder='what movie you want?...' onChange={(e)=>handleClick(e.target.value)}/>
            {loading && <p>Loading Movies...</p>}
            {error && <p>{error}</p>}
            {result.map((i,index)=>(
                <section key={index} id="ans">
                    <h3>{i.title}</h3>
                    {
                        select===i&&
                        <section className='movieContent'>
                            <img className="film" src={`https://image.tmdb.org/t/p/w500${i.poster_path}`} alt={i.title}/>
                            <div className='mcontent'>
                                <h4 id="rate">{i.vote_average} ⭐</h4>
                                <h4 className='h4'>{getGenreNames(i.genre_ids).join(", ")}</h4>
                                <h4 className='h4'>{i.release_date}</h4>
                                <p>{i.overview}</p>
                            </div>
                        </section>
                    }
                    <button onClick={()=>setSelect(i)} >Select</button>
                </section>
            ))}
        </section>
    )
}

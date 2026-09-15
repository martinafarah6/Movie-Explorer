import './Footer.css';
export default function Footer()
{
    return(
        <footer >
            <ul>
                <li><a href="https://www.facebook.com/?utm_source=chatgpt.com"  target="_blank" rel="noreferrer"><img src="https://i.pinimg.com/1200x/5b/b0/f7/5bb0f73a7b3e0f976acad614a42e5040.jpg" alt="FaceBook" width="30px"/></a></li>
                <li><a href="https://www.linkedin.com/?utm_source=chatgpt.com"  target="_blank" rel="noreferrer"><img src="https://i.pinimg.com/736x/44/28/c1/4428c1f269ea89979de6ba98709f0548.jpg" alt="LinkedIn" width="30px"/></a></li>
                <li><a href="https://www.whatsapp.com/?utm_source=chatgpt.com"  target="_blank" rel="noreferrer"><img src="https://i.pinimg.com/736x/28/af/d7/28afd71d9474a014395faca3c7c6edab.jpg" alt="WhatsApp" width="30px"/></a></li>
                <li><a href="https://www.instagram.com/?utm_source=chatgpt.com"  target="_blank" rel="noreferrer"><img src="https://i.pinimg.com/1200x/e8/00/48/e80048be84cfe35cc89dda88c1fd647c.jpg" alt="Instegram" width="30px"/></a></li>
            </ul>
            <div className="tmdb">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tmdb.new.logo.svg"  alt="TMDB"/>
                <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            </div>
            <p>@Movies.All Rights reserved.</p>
        </footer>
    )
}

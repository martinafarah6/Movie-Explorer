import './Login.css';
import { useState } from 'react';
export default function Login()
{
    const [form,setForm]=useState({
        user:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    
    const [pass,setpass]=useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(form.password.length>=6 && /[a-zA-Z]/.test(form.password) && (form.password.includes('#')||form.password.includes('$')) &&form.password===form.confirmPassword)
        {
            setpass(true);
        }
        else{
            setpass(false);
            (form.password!==form.confirmPassword)?
            alert("Password and Confirm Password must match."):
            alert("Password must be at least 6 characters long and contain at least one letter and either `#` or `$`.")
        }
    }
    return(
        <section id="login">
            <form onSubmit={handleSubmit}>
                <h2>LogIn</h2>
            <div className='formcontent'>
                <div>
                    <label htmlFor="user">User Name</label>
                    <input  onChange={(e)=>setForm({...form,user:e.target.value})} value={form.user}type="text" id="user" name="user_name" required placeholder='name'/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>setForm({...form,email:e.target.value})}  value={form.email} type="email" id="email" name="Email" required placeholder='email'/>
                </div>
                <div>
                    <label htmlFor="pass">PassWord</label>
                    <input onChange={(e)=>setForm({...form,password:e.target.value})}  value={form.password} type="password" id="pass" name="password" required placeholder='password'/>
                </div>
                <div>
                    <label htmlFor="cpass">Confirm PassWord</label>
                    <input onChange={(e)=>setForm({...form,confirmPassword:e.target.value})}  value={form.confirmPassword} type="password" id="cpass" name="Confirm_pass" required placeholder='repreat your password'/>
                </div>
            </div>
                <div>
                    <label className='ques'>What's your favorite type of movies?</label>
                    <br/>
                    <div>
                        <input type="checkbox" name="favorite type" value="Action" id="Action" />
                        <label htmlFor="Action">Action</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Comedy" id="Comedy" />
                        <label htmlFor="Comedy">Comedy</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Romance" id="Romance" />
                        <label htmlFor="Romance">Romance</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Drama" id="Drama" />
                        <label htmlFor="Drama">Drama</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Horror" id="Horror" />
                        <label htmlFor="Horror">Horror</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Thriller" id="Thriller" />
                        <label htmlFor="Thriller">Thriller</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Mystery" id="Mystery" />
                        <label htmlFor="Mystery">Mystery</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Science Fiction" id="Science" />
                        <label htmlFor="Science">Science Fiction</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Fantasy" id="Fantasy" />
                        <label htmlFor="Fantasy">Fantasy</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Adventure" id="Adventure" />
                        <label htmlFor="Adventure">Adventure</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Crime" id="Crime" />
                        <label htmlFor="Crime">Crime</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Superhero" id="Superhero" />
                        <label htmlFor="Superhero">Superhero</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="War" id="War" />
                        <label htmlFor="War">War</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Historical" id="Historical" />
                        <label htmlFor="Historical">Historical</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Animation" id="Animation" />
                        <label htmlFor="Animation">Animation</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Family" id="Family" />
                        <label htmlFor="Family">Family</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Musical" id="Musical" />
                        <label htmlFor="Musical">Musical</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Sport" id="Sport" />
                        <label htmlFor="Sport">Sport</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Biography" id="Biography" />
                        <label htmlFor="Biography">Biography</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favorite type" value="Documentary" id="Documentary" />
                        <label htmlFor="Documentary">Documentary</label>
                    </div>
                </div>
                <input type="submit" className='butt'/>
            </form>

            {pass&&<h2 className='warnning'>Registration Successful!🎉</h2>}
        </section>
    )
}


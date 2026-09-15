import './Contact.css';
import { useState } from 'react';
function Contact()
{
    const [form,setForm]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(form.name==="")
        {
            alert("Please Enter your name....");
        }
        else if(form.email==="")
        {
            alert("Please Enter your Email...");
        }
    }
    return(
        <section id="contact">
            <h2>Contact Us</h2>
            <div className='conactdetails'>
                <h3><span>📧 Email: </span>support@movieworld.com</h3>
                <h3><span>📍 Location: </span> Assiut, Egypt</h3>
                <h3><span>📞 Phone: </span>+20 100 123 4567</h3>
                <h3><span>🕐 Working Hours: </span>10:00 AM – 8:00 PM</h3>
            </div>
            <form onSubmit={handlesubmit} className='formcontent'>
                <div>
                    <label for="name">Full Name</label>
                    <input onChange={(e)=>setForm({...form,name:e.target.value})} id="name" placeholder='name' type="text"/>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input onChange={(e)=>setForm({...form,email:e.target.value})}id="name" placeholder='email' type="email"/>
                </div>
                <div>
                    <label for="sub">Subject</label>
                    <input onChange={(e)=>setForm({...form,subject:e.target.value})}id="sub" placeholder='Subject Title' type="text"/>
                </div>
                <div>
                    <label for="mess">Message</label>
                    <textarea id="mess" placeholder='message' onChange={(e)=>setForm({...form,message:e.target.value})} />
                </div>
                <input type="submit" value="Send"/>
            </form>
        </section>
    )
}

export default Contact;

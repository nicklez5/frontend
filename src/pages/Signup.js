import React, {useState} from 'react'
import s from "./../css/Signup.module.css"
import { Link , redirect} from 'react-router-dom'
import UserService from "../services/UserService";


function Signup(){
    const [status,setStatus] = useState('');

    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')

   async function handleSignup(e){
        e.preventDefault();
        try{
            UserService.register(email,fullName,password).then((response) => {
                console.log(response);
                setStatus('success')
            })
        }catch(error){
            setStatus('error')
        }
   }
    
    return (
        
                <div className={s.outside}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Library</a></li>
                        <li><a href="/">Playlists</a></li>
                        <li><a href="/">Settings</a></li>
                    </ul>
                    <div>
                        <header className={s.centeredHeader}>
                            Welcome to Spotify
                        </header>
                    </div>
                    <div className={s.addUser}>
                        <form className={s.addUserForm} onSubmit={handleSignup} >
                            <div className={s.inputGroup}>
                            <h2 className={s.header_signup}>Sign up</h2>
                                <div className = {s.header_div}>
                                    <label htmlFor="email" className={s.header_div_email}>Email:</label>   
                                    <input onChange={e => {setEmail(e.target.value)}} type="email" id="email" className={s.header_div_email_input} placeholder="Enter your email"/>
                                    <label htmlFor="fullName" className={s.header_div_name} >Name: </label>
                                    <input onChange={e => {setFullName(e.target.value)}} type="text" className={s.header_div_name_input} placeholder="Enter your name"/>
                                    <label htmlFor="password" className={s.header_div_password}>Password: </label>
                                    <input onChange={e => {setPassword(e.target.value)}} type="password" className={s.header_div_password_input} id="password" placeholder="Enter your password"/>
                                    <button type="submit" className={s.button_1}>Submit</button>
                                    {status === 'success' && (<p className={s.success}>Succesfully signed up</p>)}
                                    {status === 'error' && <p className={s.failure}>user already exists</p>}
                                </div>
                            </div>
                        </form>
                        <div className={s.login}>
                            <p>Already have an account ? </p>
                            <Link to="/login" type="submit" className={s.login_p}>
                                Login
                            </Link>
                        </div>
                    </div>
            </div>
            
            
           
        
     

    )
}
export default Signup
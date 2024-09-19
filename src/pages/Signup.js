import React, {useState} from 'react'
import "./../css/signup.css"
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
        
                <div className="outside">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">Library</a></li>
                        <li><a href="#contact">Playlists</a></li>
                        <li><a href="#about">Settings</a></li>
                    </ul>
                    <div>
                        <header className="centered-header">
                            Welcome to Spotify
                        </header>
                    </div>
                    <div className="addUser">
                        <form className="addUserForm" onSubmit={handleSignup} >
                            <div className="inputGroup">
                            <h2>Sign up</h2>
                                <div className = "mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>   
                                    <input onChange={e => {setEmail(e.target.value)}} type="email" id="email" className="form-control" placeholder="Enter your email"/>
                                </div>
                                <div className = "mb-3">
                                    <label htmlFor="fullName" className="form-label">Name: </label>
                                    <input onChange={e => {setFullName(e.target.value)}} type="text" className="form-control" id="fullName" placeholder="Enter your name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password: </label>
                                    <input onChange={e => {setPassword(e.target.value)}} type="password" className="form-control" id="password" placeholder="Enter your password"/>
                                </div>
                                <button type="submit" className="button1">Submit</button>
                                {status === 'success' && (<p className="text-success">Succesfully signed up</p>)}
                                {status === 'error' && <p>user already exists</p>}
                            </div>
                        </form>
                        <div className="login">
                            <p>Already have an account ? </p>
                            <Link to="/login" type="submit" id="login_button">
                                Login
                            </Link>
                        </div>
                    </div>
            </div>
            
            
           
        
     

    )
}
export default Signup
import '../css/login.css';
import { useState } from 'react';
import { Link , redirect } from 'react-router-dom'
import UserService from '../services/UserService';
import { useForm } from 'react-hook-form';
import { setAuthToken } from '../helpers/setAuthToken'
import Swal from "sweetalert2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { jwtDecode} from 'jwt-decode'
export default function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleLogin(e){
    e.preventDefault()
    UserService.login(email,password)
    .then(
      response => {

          console.log(response)
          
          const token = response.data.token;
          const user = jwtDecode(token)
          localStorage.setItem('token',token)
          setAuthToken(token);
          localStorage.setItem('email', user.sub);
          window.location.href = '/dashboard'
         
      }).catch((error) => {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message
        })
      })
    
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
        
        <form className="loginUser" onSubmit={handleLogin}>
          <div className="inputGroup" >
                <p>Login</p>
                <div className="mb-3">
                  <label className="email" htmlFor="email">Email:</label>
                  <input
                    htmlFor="email"
                    type="email"
                    onChange={e => {setEmail(e.target.value)}}
                    placeholder="Enter email"
                    id="email2"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password:</label>
                  <input 
                    htmlFor="password"
                    onChange={e => {setPassword(e.target.value)}} 
                    type="password" 
                    id="password2" 
                    placeholder="Enter password"
                    />
                </div>
                <button type="submit" className="button2">Log in</button>
          </div>
        </form>
        
        
     
        <Link className="go_back"to="/">Go back</Link>
        </div>
       
    
        
)}

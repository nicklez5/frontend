import s from "../css/login.module.css";
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
     
        <div className={s.outside}>
        <ul>
            <li className={s.li}><a href="/">Home</a></li>
            <li><a href="/">Library</a></li>
            <li><a href="/">Playlists</a></li>
            <li><a href="/">Settings</a></li>
        </ul>
        <div>
            <header className={s.centeredheader}>
                Welcome to Spotify
            </header>
        </div>
        <div>
        <h1 className={s.login_id}>Login</h1>
        <form className={s.LoginUser} onSubmit={handleLogin}>
          
          <div className={s.inputGroup2} >
        
                <div className={s.inputFormdiv}>
                  <label className={s.email} htmlFor="email">Email:</label>
                  <input
                    htmlFor="email"
                    type="email"
                    onChange={e => {setEmail(e.target.value)}}
                    placeholder="Enter email"
                    className={s.email2}/>
                  <label className={s.password} htmlFor="password">Password:</label>
                  <input 
                    htmlFor="password"
                    onChange={e => {setPassword(e.target.value)}} 
                    type="password" 
                    className={s.password2}
                    placeholder="Enter password"
                    />
                    <button type="submit" className={s.button321_0}>Log in</button>
                </div>

          </div>
        </form>
        </div>
        
     
        <Link className={s.go_back} to="/">Go back</Link>
        </div>
       
    
        
)}

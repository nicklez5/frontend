import React from 'react';
import axios from 'axios';
import { setAuthToken } from '../helpers/setAuthToken';
import UserService from '../services/UserService';
import Header from './Login';
export default function Random() {
  const handleSubmit = (username, password) => {
    //reqres registered sample user
    const loginPayload = {
      username: 'jesusman22',
      password: 'jacksonlu',
    };

    axios
      .post('http://localhost:8000/login', loginPayload)
      .then((response) => {
        //get token from response
        const token = response.data.token;

        //set JWT token to local
        localStorage.setItem('token', token);

        //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = '/';
      })
      .catch((err) => console.log(err));
  };

  return(
    <>
    </>
  );
}

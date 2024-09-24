/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const spotify_url = "http://localhost:8000/users/"
const loginPayload = {
    username: "jesusman22",
    password: "jacksonlu"
}
class UserService{
    register(email1,fullName1,password1){
        return axios.post(spotify_url + "signup", {
            email: email1,
            password: password1,
            fullName: fullName1,
        },{headers: {
            'Content-Type': 'application/json',
            'Authorization': 'No Auth'
            },
        })
    }
    login(email1,password1){
        return axios.post(spotify_url + "login",{
            email: email1,
            password: password1
        },{headers: {
            'Content-Type': 'application/json',
            'Authorization': 'No Auth'   
            },
        })
    }


    info(email){
        const form = new FormData();
        form.append("email",email)
        return axios.get(spotify_url + "info",{headers: {'Content-Type': 'multipart/form-data'}})
    }
    update(username,password,email){
        const form = new FormData();
        form.append('username',username)
        form.append('password',password)
        form.append("email",email)
        return axios.put(spotify_url + "update", form, {headers: {'Content-Type': 'multipart/form-data'}}
        );
    }
    delete(email){
        const form = new FormData();
        form.append("email",email)
        return axios.delete(spotify_url + "delete", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    getUser(email){
        const form = new FormData();
        form.append('email',email)
        return axios.get(spotify_url + "read", form, {headers: {'Content-Type' : 'multipart/form-data'}})
    }
    
}

export default new UserService()
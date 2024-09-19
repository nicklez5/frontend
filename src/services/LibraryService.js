/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const spotify_url = "http://localhost:8000/library/"

class LibraryService{
    addSong(title, email){
        const form = new FormData();
        form.append("title",title);
        form.append("email",email);
        return axios.post(spotify_url + "addSong", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    deleteSong(title,email){
        const form = new FormData();
        form.append("title",title);
        form.append("email",email)
        return axios.delete(spotify_url + "deleteSong", form, {headers: {'Content-Type' : 'multipart/form-data'}})
    }
    getLibrary(email){
        const form = new FormData();
        form.append('email',email)
        return axios.get(spotify_url + "info", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    clear(email){
        const form = new FormData();
        form.append('email',email)
        return axios.delete(spotify_url + "clear", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
}

export default new LibraryService();
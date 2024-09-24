/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const spotify_url = "http://localhost:8000/playlist/"
const email = localStorage.getItem('email')
class PlaylistService{
    addSongToPlaylist(id){
        const form = new FormData();
        form.append('email',email)
        return axios.post(spotify_url + "addSong/" + id, form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    removeSongToPlaylist(id){
        const form = new FormData();
        form.append('email',email);
        return axios.delete(spotify_url + "removeSong/" + id, form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    getSongs(){
        const form = new FormData();
        form.append('email',email);
        return axios.get(spotify_url + "getSongs", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    renamePlaylist( playlist_name){
        const form = new FormData();
        form.append('email',email)
        form.append('playlist_name',playlist_name)
        return axios.post(spotify_url + "rename", form, {headers: {'Content-Type' : 'multipart/form-data'}})
    }
    clearPlaylist(){
        const form = new FormData();
        form.append('email', email)
        return axios.delete(spotify_url + "clear", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    getPlaylistName(){
        const form = new FormData();
        form.append('email',email)
        return axios.get(spotify_url + "getPlaylistName", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
 
}
export default new PlaylistService()
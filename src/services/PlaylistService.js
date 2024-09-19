/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const spotify_url = "http://localhost:8000/playlist/"

class PlaylistService{
    addSongToPlaylist(id,email){
        const form = new FormData();
        form.append('email',email)
        return axios.post(spotify_url + "addSong/" + id, form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    removeSongToPlaylist(id,email){
        const form = new FormData();
        form.append('email',email);
        return axios.delete(spotify_url + "removeSong/" + id, form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    getSongs(email){
        const form = new FormData();
        form.append('email',email);
        return axios.get(spotify_url + "getSongs", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    readPlaylist(email){
        const form = new FormData();
        form.append('email',email)
        return axios.get(spotify_url + "read", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    readPlaylistSongs(email){
        const form = new FormData();
        form.append('email',email);
        return axios.get(spotify_url + "read/songs", form, {headers: {'Content-Type' : 'multipart/form-data'}})
    }
    renamePlaylist(email, playlist_name){
        const form = new FormData();
        form.append('email',email)
        form.append('playlist_name',playlist_name)
        return axios.put(spotify_url + "rename", form, {headers: {'Content-Type' : 'multipart/form-data'}})
    }
    clearPlaylist(email){
        const form = new FormData();
        form.append('email', email)
        return axios.delete(spotify_url + "clear", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    getPlaylistName(email){
        const form = new FormData();
        form.append('email',email)
        return axios.get(spotify_url + "getPlaylistName", form, {headers: {'Content-Type': 'multipart/form-data'}})
    }
    setPlaylistName(email,name){
        const form = new FormData();
        form.append('name',name)
        form.append('email',email)
        return axios.put(spotify_url + "setPlaylistName", form , {headers: {'Content-Type' : 'multipart/form-data'}})
    }
}
export default new PlaylistService()
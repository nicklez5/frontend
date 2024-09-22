import axios from "axios"
import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import "./../css/dashboard.css"
import Song from "../components/Song";
import SongService from "../services/SongService";
import UserService from "../services/UserService";
import { jwtDecode} from 'jwt-decode'
import ReactPlayer from 'react-player/lazy'
import fileDownload from 'js-file-download';
import  base64ToArrayBuffer from './MusicPlayer'
export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            email: 'jackson2k23@yahoo.com',
            songs: []
        
        }
        
    }
        
    componentDidMount(){
        axios.get(`http://localhost:8000/songs/all`,
        {
            params: {email: this.state.email },
            headers: { 
                'Content-Type': "application/json"
            }
        })
        .then((response => {
            console.log(response)
        }))
    }
    
    
    download = (data) => {
        axios.get(`http://localhost:8000/songs/downloadFile`,
        {
            params: {filename: data.filename},
            headers: {
                'Content-Type': "audio/mp3"
            }
        })
        .then((response => {
            console.log(response.request.responseURL)
            //console.log(response)
            window.location.href = response.request.responseURL
        }))}
    
    
    handleClick(){
        
        window.location.wref = '/'
    }
    
   
       
    

    render(){
        
        return (
            <div className="outside2">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">Library</a></li>
                    <li><a href="#contact">Playlists</a></li>
                    <li><a href="#about">Settings</a></li>
                </ul>
                <div>
                    <header className="centered-header2">
                        Welcome to Spotify
                    </header>
                </div>
                <h2 className="text-center">Song Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>artist</th>
                            <th>Filename</th>
                            <th>Features</th>
                            <th>Song</th>
                        </tr>
                    </thead>
                    <tbody className="Table">
                        {this.state.songs.map(songs => (
                                <tr key={songs.id}><th>{songs.id}</th>
                                    <th className="icyhot">{songs.title}</th>
                                    <th className="icyhot">{songs.artist}</th>
                                    <th>mp3</th> 
                                    <th className="icyhot"><a href={songs.url}>Link</a></th>    
                                    <button className="button123" onClick={() => this.download(songs)}>Download</button>                          
                                    <audio controls>
                                        <source id="mySong" src={songs.url} type="audio/mp3" />
                                    
                                    </audio>
                                </tr>
                        ))}
                        
                        
                    </tbody>
                </table>
                <Link className="logout1" href='/' >Logout</Link>
                <button className="goback1">Go back</button>
                </div>
        )
    }
    
}


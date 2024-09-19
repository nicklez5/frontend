import axios from "axios"
import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import "./../css/dashboard.css"
import SongService from "../services/SongService";
import UserService from "../services/UserService";
import { jwtDecode} from 'jwt-decode'
import ReactPlayer from 'react-player/lazy'
export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            songs: [],
            filename: '',
        }
        
    }
    play = (data,index) => {
        console.log(this.state.songs)
    }
    download = (data) => {
        axios.get(`http://localhost:8000/songs/downloadFile`,
        {
            params: {filename: data.filename},
            headers: {
                'Content-Type': "audio/mpeg"
            }
        })
        .then((response => {
            console.log(response.request.responseURL)
            window.location.href = response.request.responseURL
        }))}
    
    

    
    componentDidMount(){
        axios.get(`http://localhost:8000/songs/all`,
        {
            params: {email: "jackson2k11@gmail.com"} ,
            headers: {

                'Content-Type': 'application/json'
            }
        }).then((res => {
            console.log(res);
            var list_of_song = []
            for(let i = 0 ; i < res.data.length; i++){
                const song = res.data[i]
                list_of_song.push(song);
            }
            
            this.state.songs = list_of_song
            this.setState({
                songs: list_of_song
            })
            console.log(list_of_song)
        }))
        .catch((err) => console.log(err))
        }
       
    render(){
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
                <h2 className="text-center">Song Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>artist</th>
                            <th>Filename</th>
                            <th>Features</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.songs.map(songs => (
                                <tr key={songs.id} className = "icycold">{songs.id}
                                    <th className="icyhot">{songs.title}</th>
                                    <th className="icyhot">{songs.artist}</th> 
                                    <th className="icyhot"><center><button className="button1" onClick={() => this.download(songs)}>Download</button></center>{songs.filename}</th>                              
                                    <th><center><button className="button2" onClick={() => this.play(songs)}>Play me</button></center></th>
                                    
                                </tr>
                        ))}
                        
                    </tbody>
                </table>
                <button className="logout1">Logout</button>
                </div>
        )
    }
    
}


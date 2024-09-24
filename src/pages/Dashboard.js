import axios from "axios"
import React, {useState, useEffect, MouseEvent, setState} from 'react'
import { Link } from "react-router-dom";
import "./../css/dashboard.css"
import Button from "../Buttons/Button";
import SongService from "../services/SongService";
import PlaylistService from "../services/PlaylistService";
import deleteSong from "../components/Functions";
export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            email: localStorage.getItem('email'),
            songs: [],
            filename: ''
            
        }
        
        axios.get(`http://localhost:8000/songs/all`,
            {
                params: {email: this.state.email },
                headers: { 
                    'Content-Type': "application/json"
                }
            })
            .then((response => {
                console.log(response.data)
                for(let i = 0; i < response.data.length ; i++){
                    this.state.songs.push(response.data[i]);
                    
                }
                for(let i = 0 ; i < response.data.length; i++){
                    //console.log("NOT ENCODED " + response.data[i].fileDownloadUri)
                    const encoded = encodeURI(response.data[i].fileDownloadUri)
                    //console.log("ENCODED " + encoded)
                    this.state.songs[i].fileDownloadUri = encoded;
                        
                }
                this.setState({
                    songs: this.state.songs
                })
                console.log(this.state.songs)
        }))
        
    }
    componentDidMount(){
        
        
    }
    
    
    download = (data) => {
        axios.get(`http://localhost:8000/songs/download/` + data.fileDownloadUri,
        {
            headers: {
                'Content-Type': "audio/mp3"
            }
        })
        .then((response => {
            console.log(response.request.responseURL)
            console.log(response)
            window.location.href = response.request.responseURL
        }))}
    
     addToPlaylist = (song) => {
        try{
            PlaylistService.addSongToPlaylist(song, this.state.email)
            .then((resp) => {
                console.log(resp)
            })
        }catch{
            console.log("Failed");
        }
     }
     handleClick = (element) => {
        try{
            deleteSong(element);
            window.location.reload();
        }catch{
            console.log("Failed")
            window.location.reload();
        }
        
       
    }
    logout = () => {
        localStorage.clear()
        
        window.location.href = '/'
    }

        
    
        
       // window.location.href = '/'
    
    
   
       
    

    render(){
        
        return (
            <div className="outside2">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/dashboard">Library</a></li>
                    <li><a href="/playlists">Playlists</a></li>
                    <li><a href="/settings">Settings</a></li>
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
                            <th>Links</th>
                            <th>Song</th>
                            <th>Buttons</th>
                        </tr>
                    </thead>
                    <tbody className="Table" id="Table2">
                        {this.state.songs.map((songs,index) => (
                                <tr className="123" key={songs.id} onClick={this.fetchSongDetails}><th>{songs.id}</th>
                                    <th data-title="Title" className="icyhot">{songs.title}</th>
                                    <th data-title="Artist" className="icyhot">{songs.artist}</th>
                                    <th data-title="Filename">{songs.fileName}</th> 
                                    <th data-title="FileDownloadUri" className="icyhot"><a className="link1" href={songs.fileDownloadUri}>Link</a></th>    
                                    {/* <button className="button123" onClick={() => this.download(songs.fileDownloadUri)}>Download</button>                           */}
                                    <audio controls>
                                        <source id="mySong" src={songs.fileDownloadUri} type="audio/mp3" />
                                    
                                    </audio>
                                    
                                    <th ><button className="buttonxyz" onClick={() => this.handleClick(songs.id)}>Delete Me</button> <button onClick={() => this.addToPlaylist(songs.id)} className="buttonxyz">Add to playlist</button>  </th>
                                     
                                </tr>
                        ))}
                        
                        
                    </tbody>
                </table>
                <Link to="/addMusic" id="button321">Add a song</Link>
        
                <button to="/" onClick={() => this.logout()} className="button_forever">Log out</button>
    
                </div>
        )
    }
    
}


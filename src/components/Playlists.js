import axios from "axios"
import React, {useState, useEffect, MouseEvent} from 'react'
import { Link } from "react-router-dom";

import PlaylistService from "../services/PlaylistService";
import RenamePlaylist from "./RenamePlaylist";
export default class Playlist extends React.Component{
    constructor(){
        super();
        this.state = {
            email: localStorage.getItem('email'),
            songs: [],
            playlistname: localStorage.getItem("playlistname"),
            input: ''
        }
        
            if(this.state.songs.length !== 0){
                try{
                    axios.get(`http://localhost:8000/playlist/info`,{
        
                        params: {email : this.state.email },
                        headers: { 
                            'Content-Type': 'application/json'
                        }
                    }).then((resp => {
                        console.log(resp)
                        this.state.playlistname = resp.data.playlistName;
        
                        console.log(resp.data.songs);
                        for(let i = 0 ; i < resp.data.songs.length ; i++){
                            this.state.songs.push(resp.data.songs[i]);
                        }
                        for(let i = 0 ; i < resp.data.songs.length; i++){
                            const encoded = encodeURI(resp.data.songs[i].fileDownloadUri);
                            this.state.songs[i].fileDownloadUri = encoded;
                        }
                        this.setState({
                            playlistname: this.state.playlistname,
                            songs: this.state.songs
                        })
                        console.log(this.state.songs);
                    }))
            
                }catch{
                    
                }
        
            }else{
                try{
                    
                    PlaylistService.renamePlaylist(this.state.email,this.state.playlistname)
                    .then((resp => {
                        console.log(resp.data.songs);
                        for(let i = 0 ; i < resp.data.songs.length ; i++){
                            this.state.songs.push(resp.data.songs[i]);
                        }
                        for(let i = 0 ; i < resp.data.songs.length; i++){
                            const encoded = encodeURI(resp.data.songs[i].fileDownloadUri);
                            this.state.songs[i].fileDownloadUri = encoded;
                        }
                        this.setState({
                            playlistname: this.state.playlistname,
                            songs: this.state.songs
                        })
                        console.log(this.state.songs);
                    }))
                }catch{

                }
            }
        

    }
    handleChange(event){
        this.setState({
            playlistname: event.target.value
        })
        
    }
    handleSubmit(event){
        
    }
    handleClick = () => {
        
    }
    componentDidMount(){
        

        
        
    }

    render(){
        return(
            <div className="outside3">
                <ul>    
                    {}
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/dashboard">Library</a>
                    </li>
                    <li>
                        <a href="/playlists">Playlists</a>
                    </li>
                    <li>
                        <a href="/settings">Settings</a>
                    </li>
                </ul>
                <div>
                    
                </div>
                
                <Link to="/renamePlaylist" id="button321" onClick={this.handleClick}>Renaming playlist</Link>
                
                <h1 id="playlistCruise">Playlist Name: </h1><h1 className="rename_playlist">{this.state.playlistname}</h1>
                <table className="tablexyz">
                    <thead>
                        <th>id</th>
                        <th>title</th>
                        <th>Artist</th>
                        <th>Filename</th>
                        <th>Links</th>
                        <th>Song</th>
                        <th>Features</th>
                    </thead>
                    <tbody className="Table" id="Table2">
                    {this.state.songs.map((songs,index) => (
                        <tr className="123" key={songs.id}>
                            <th>{songs.id}</th>    
                            <th data-title="Title" className="icyhot">{songs.title}</th>
                            <th data-title="Artist" className="icyhot">{songs.artist}</th>
                            <th data-title="Filename">{songs.fileName}</th>
                            <th data-title="FileDownloadUri" className="icyhot"><a className="link1" href={songs.fileDownloadUri}>Link</a></th>
                            <audio controls>
                                <source id="mySong" src={songs.fileDownloadUri} type="audio/mp3" />
                            </audio>
                            <th><button className="buttonxyz1" onClick={() => this.handleClick(songs.id)}>Remove Me</button></th>
                        </tr>
                    
                    ))}
                    </tbody>
                    
                </table>
               
            </div>
            
            
        )
    }
}   

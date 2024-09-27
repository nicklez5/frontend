import axios, { AxiosError } from "axios"
import React, {useState, useEffect, MouseEvent} from 'react'
import { Link } from "react-router-dom";
import f from'../css/Playlist.module.css'
import PlaylistService from "../services/PlaylistService";
import RenamePlaylist from "./RenamePlaylist";
import { Redirect} from 'react-router';
export default class Playlist extends React.Component{
    constructor(){
        super();
        this.state = {
            email: localStorage.getItem('email'),
            songs: [],
            playlistname: localStorage.getItem('playlistname'),
            input: '', 
        
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        
        
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
        

        

    }
    
    handleChange(event){
        
        this.setState({
            playlistname: event.target.value
        })
        
    }
    handleClick2 = () => {
        window.open("/dashboard")
    }
 
    handleSubmit(event){
        axios.post('http://localhost:8000/playlist/rename', {
            param: {email: localStorage.getItem("email"), playlist_name: event.target.value },
            headers:{
                'Content-Type': "application/json"
            }
        }).then((resp) => {
            console.log(resp)
        }).catch((err) => {
            console.log(AxiosError(err))
        }).finally(() => {
            console.log("renamed");
        })
    }
    handleClick = (event) => {
        console.log(event);
        axios.delete('http://localhost:8000/playlist/removeSong/' + event,{
            params: { email: localStorage.getItem("email") } 
        })
        .then((resp) => {
            console.log(resp.data);    
        })

        .catch((err) => {
           console.log(err)

        }).finally(() => {
            alert("Song has been deleted");
        })
        
    }
    componentDidMount(){
        

        
        
    }

    render(){
        return(
            
            <div className={f.outside3}>
                
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
                <body>
                <div>
                    
                </div>
                


                <Link to="/renamePlaylist" className={f.button321} >Create a playlist</Link>
                <h1 className={f.playlistCruise}>Playlist: {this.state.playlistname}</h1>
                <table className={f.table}>
                    <thead className={f.thead123} >
                        <tr className={f.tablerow}>
                        <th className={f.tablecol}>id</th>
                        <th className={f.tablecol}>Title</th>
                        <th className={f.tablecol}>Artist</th>
                        <th className={f.tablecol}>Filename</th>
                        <th className={f.tablecol}>Links</th>
                        <th className={f.tablecol}>Song</th>
                        <th className={f.tablecol}>Features</th>
                        </tr>
                    </thead>
                    <tbody className={f.Table3}>
                    {this.state.songs.map((songs,index) => (
                        <tr className={f.table2rows} key={songs.id}>
                            <th className={f.table2data}>{songs.id}</th>    
                            <th className={f.table2data} data-title="Title">{songs.title}</th>
                            <th className={f.table2data} data-title="Artist">{songs.artist}</th>
                            <th className={f.table2data} data-title="Filename">{songs.fileName}</th>
                            <th className={f.table2data} data-title="FileDownloadUri"><a className="link1" href={songs.fileDownloadUri}>Link</a></th>
                            <audio className={f.mySong} controls>
                                <source src={songs.fileDownloadUri} type="audio/mp3" />
                            </audio>
                            <th className={f.table2data}><button className="buttonxyz1" onClick={() => this.handleClick(songs.id)}>Remove Me</button></th>
                        </tr>
                    
                    ))}
                    </tbody>
                    
                </table>
                </body>
            </div>
            
            
        )
    }
}   

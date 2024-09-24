import React, {useState} from 'react'
import axios from "axios"
import PlaylistService from '../services/PlaylistService'

export default function RenamePlaylist(){
    const [status,setStatus] = useState('');
    const [name,setName] = useState('');
    const email = localStorage.getItem('email')
    async function RenamingPlaylist(e){
        e.preventDefault();
        try{
            PlaylistService.renamePlaylist(name)
            .then((resp) => {
                console.log(resp)
                localStorage.setItem('playlistname', resp.data.playlistName);
                setStatus('success')
            })
        }catch(error){
            setStatus('error')
        }
    }
    return (
        <div className="outside">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Library</a></li>
                <li><a href="/playlists">Playlists</a></li>
                <li><a href="/about">Settings</a></li>
            </ul>
            <div>
                <header>Name a playlist</header>
            </div>
            <div className="outside123">
                <form className="addMusicForm" onSubmit={RenamingPlaylist}>
                    <div>
                        <h1>Playlist</h1>
                        <label htmlFor="name">Name:</label>
                        <input onChange={e => {setName(e.target.value)}} type="name" placeholder="Enter a playlist name"/>
                    </div>
                    <button type="submit">Submit</button>
                    {status === 'success' && (<p className="text-success">Successfully renamed</p>)}
                    {status === 'error' && <p>Fail to upload</p>}
                </form>
            </div>
        </div>
    )
}
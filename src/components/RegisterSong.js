import React, {useState} from 'react'
import axios from "axios";
import SongService from '../services/SongService';

export default function AddMusic(){
    const [status,setStatus] = useState('');
    const [title,setTitle] = useState('')
    const [artist,setArtist] = useState('')
    const [file,setFile] = useState('')
    const email = localStorage.getItem('email')
    async function handleMusic(e){
        console.log(e);
        e.preventDefault();
        try{
            SongService.upload(email,title,artist,file).then((resp) => {
                setStatus('success')
            
            })
        }catch(error){
            setStatus('error');
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
                <header>Add a song</header>
            </div>
            <div className="outside123">
                <form className="addMusicForm" onSubmit={handleMusic}>
                    <div>
                        <h1>Music</h1>
                        <label htmlFor="title">Title:</label>
                        <input onChange={e => {setTitle(e.target.value)}} type="title" placeholder="Enter your title"/> 
                    </div>
                    <div>
                        <label htmlFor="artist">Artist:</label>
                        <input onChange={e => {setArtist(e.target.value)}} type="title" placeholder="Enter your artist"/> 
                    </div>
                    <div>
                        <label htmlFor="file">File:</label>
                        <input type="file" onChange={e => {setFile(e.target.files[0])}} placeholder="Submit the file"/>
                    </div>
                    <button type="submit">Submit</button>
                    {status === 'success' && (<p className="text-success">Successfully uploaded</p>)}
                    {status === 'error' && <p>Fail to upload</p>}
                </form>
            </div>
        </div>
        
    )
}
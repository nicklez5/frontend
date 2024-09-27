import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {useForm, SubmitHandler} from 'react-hook-form';
import axios, { AxiosError } from "axios"
import PlaylistService from '../services/PlaylistService'
import s from '../css/Renameplaylist.module.css';
export default function RenamePlaylist(){
    const [status,setStatus] = useState('');
    const [name,setName] = useState('');
    const email = localStorage.getItem('email')
    function RenamingPlaylist(e){
        e.preventDefault();
        try{
            PlaylistService.renamePlaylist(email,name)
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
        <div className={s.outside2}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Library</a></li>
                <li><a href="/playlists">Playlists</a></li>
                <li><a href="/about">Settings</a></li>
            </ul>
            <div>
                <header>Name a playlist</header>
            </div>
            <div className>
                <form className="addMusicForm" onSubmit={RenamingPlaylist}>
                    <div className={s.playlistdiv}>
                        <h1 className={s.title123}>Playlist</h1>
                        <label className={s.label123} htmlFor="name">Name:</label>
                        <input className={s.text123}onChange={e => {setName(e.target.value)}} type="name"  placeholder="Enter a playlist name"/>
                    </div>
                    <button className={s.button123}type="submit">Submit</button>
                    {status === 'success' && (<p className={s.textsuccess}>Successfully renamed</p>)}
                    {status === 'error' && <p>Fail to upload</p>}
                </form>
                <Link to="/playlists" className={s.goback}>Go Back</Link>
            </div>
        </div>
    )
}
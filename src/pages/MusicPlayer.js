import "../css/music.css";
import fileDownload from 'js-file-download';
import { useCallback, useState } from "react";
import axios from "axios";
export default function MusicPlayer(){
    

    function init(){
        const {data3} = () => axios.get(`http://localhost:8000/songs/info/` + 1,
            {
                params: {email: "jackson2k23@yahoo.com"},
                headers: { 'Accept': '*/*', 'Content-Type': 'application/json' }
            }).then(resp => {
                console.log(resp);
                
            }).catch((err) => console.log(err))
    }
    
    
   
    
   
    function base64ToArrayBuffer(base64) {
        var binaryString = window.atob(base64);
        var binaryLen = binaryString.length;
        var bytes = new Uint32Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
            var ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    }
    function saveByteArray(reportName, byte) {
        var blob = new Blob([byte], {type: "audio/mp3"});
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
       
        var fileName = reportName;
        link.download = fileName;
        link.click();
    };
    
    return(
        <div className="outside123">
            
            <div className="div1">
                <audio controls className="audio123">
                    <source  type="audio/mp3" />
                </audio>
            </div>
            <button className="buttonxyz" onClick={init()}>Click me</button>
            
           
        </div>
    )
}
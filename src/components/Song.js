import React from "react";
class Song extends React.Component{
    constructor(){
        super();
        this.state = {id: 0,title: "",artist: "",fileDownloadUri: "", filename: "" }
    }
    render(){
        return <h2>I am a song</h2>
    }
}

export default Song;
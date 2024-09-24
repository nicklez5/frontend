import "./../css/header.css";
import Signup from "./Signup"
function HomePage() {
  return (
        
    <div class="multi-bg-example">
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/dashboard">Library</a></li>
            <li><a href="/playlists">Playlists</a></li>
            <li style={{marginRight: 10}}><a href="/settings">Settings</a></li>
        </ul>
        <h1>Welcome to Spotify</h1>
        <div class="multi-bg-example">
            <header class="centered-header">
                Hello {localStorage.getItem('email')}
            </header>
        </div>
    </div>
)
 }
 
 export default HomePage;
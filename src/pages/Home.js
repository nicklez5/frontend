import "./../css/header.css";
import Signup from "./Signup"
function HomePage() {
  return (
        
    <div class="multi-bg-example">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">Library</a></li>
            <li><a href="#contact">Playlists</a></li>
            <li style={{marginRight: 10}}><a href="#about">Settings</a></li>
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
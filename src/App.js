import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { history } from './helpers/history';
import { setAuthToken } from './helpers/setAuthToken';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import MusicPlayer from './pages/MusicPlayer';
import AddMusic from './pages/RegisterSong';
import Playlist from './pages/Playlists';
import RenamePlaylist from './pages/RenamePlaylist';
import Settings from './pages/Settings';
function App() {
  const token = localStorage.getItem('token');
  if (token) {
    setAuthToken(token);
  }

  return (
    <Router history={history}>
      <Routes>
        <Route path="/" exact element={<Signup />} />
        <Route path="/music" exact element={<MusicPlayer />} />
        <Route path="/settings" exact element={<Settings />} />
        <Route path="/addMusic" exact element={<AddMusic />} />
        <Route path="/renamePlaylist" exact element={<RenamePlaylist />} />
        <Route path="/playlists" exact element={<Playlist />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

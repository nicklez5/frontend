import './App.css';
import { BrowserRouter as Router, 
  Routes,
  Route,
  Navigate
 } from 'react-router-dom';
import { history } from './helpers/history';
import {setAuthToken} from './helpers/setAuthToken'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }

  return (
    <Router history={history}>
        <Routes>
             <Route path="/" exact element={<Signup/>} />
             <Route path="/login" exact element={<Login/>} />
             <Route path="/home" exact element={<Home/>} />
             <Route path="/dashboard" exact element={<Dashboard/>} />
        </Routes>
    </Router>
);

}

export default App;

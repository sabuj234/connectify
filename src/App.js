import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth/Auth';
import Home from './pages/Homepage/Home'; 
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <div className='blur' style={{top:'-18%', right:0}}></div>
      <div className='blur' style={{top:"36%", left :'-8rem'}}></div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="signup" element={<Auth/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;

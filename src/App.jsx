import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Navbar from './components/navbar';
import AdminPage from './pages/adminpage';

function App() {
  return (
    <BrowserRouter>
      <div>
       
        <Routes pathe ="/*">
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
            <Route path="/adminpage/*" element={<AdminPage />} />
          <Route path = '/*' element={<h1>404 Not Found</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

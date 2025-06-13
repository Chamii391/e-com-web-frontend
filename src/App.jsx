import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Navbar from './components/navbar';
import AdminPage from './pages/adminpage';
import TestPage from './pages/testPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Toaster position="top-right" />
       
        <Routes pathe ="/*">
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminpage/*" element={<AdminPage />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path = '/*' element={<h1>404 Not Found</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

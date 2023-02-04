import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Blog from "./Pages/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Resume' element={<Resume />} />
        <Route path='Portfolio' element={<Portfolio />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Blog' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Blog from "./Pages/Blog";
import { AuthContextProvider } from './context/AuthContext';
import Protected from './Components/Protected';
import Account from "./Pages/Account";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Resume' element={<Resume />} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='account' element={<Protected><Account /></Protected>} />
          <Route path='Blog' element={<Blog />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

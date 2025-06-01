import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Movies from './pages/movies';
import { useState, useEffect } from "react";
import Loader from "./components/loader";
import NavBar from './components/navBar';
import TVShows from './pages/TV-shows';
import Categories  from './pages/categories';
import Contact from './pages/contact';





function App() {

  

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
    
  }



  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;





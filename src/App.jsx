import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Content from './pages/content';
import { useState, useEffect } from "react";
import Loader from "./components/loader";
import NavBar from './components/navBar';
import Categories  from './pages/categories';
import Contact from './pages/contact';
import Footer from './components/footer';





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
    <div >
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;





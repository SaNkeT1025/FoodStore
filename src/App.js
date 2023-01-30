import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Recipe from './pages/Recipe';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Navbar />}>
              <Route index element={<Home />}/>
              <Route path="about" element={<About />}/>
              <Route path="recipe" element={<Recipe />}/>
              <Route path="blog" element={<Blog/>}/>
              <Route path="contact" element={<ContactUs/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

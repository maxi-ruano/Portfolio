import react,{useState,useEffect} from 'react';
import Cover from './components/cover/Cover';
import "./App.css";
import Navbar from './components/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';



function App() {
  


  return (
    <div className="App">
      <Navbar />
      <Cover/>
      <About/>
      <Slider/>
      <Skills/>
      <Footer/>
     
    </div>
  );
}

export default App;

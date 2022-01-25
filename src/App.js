import react,{useState,useEffect} from 'react';
import Cover from './components/cover/Cover';
import "./App.css";
import Navbar from './components/Navbar';
import About from './components/about/About';


function App() {
  


  return (
    <div className="App">
      <Navbar />
      <Cover/>
      <About/>
    </div>
  );
}

export default App;

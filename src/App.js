import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import About from './Components/About';
import WorkSamples from './Components/WorkSamples';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
     <div className='links'>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/workSamples'>WorkSamples</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
     </div>
     <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/workSamples' element={<WorkSamples />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;

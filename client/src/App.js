
import './App.css';
import NyxWolve from './components/Nyxwolve';
import Allusers from './components/Allusers';
import Adduser from './components/Adduser';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   <Navbar/> 
      <Routes>
       < Route path='/'  element={<NyxWolve/>}/>
        <Route path='/all' element={<Allusers/>}/>
        <Route path='/add'element={<Adduser/>}/> 
        </Routes>
      </BrowserRouter>
  );
}

export default App;

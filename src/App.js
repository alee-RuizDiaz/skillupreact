
import { Routes, Route } from 'react-router-dom'
import Login from "./components/Login/Login";
import Listado from "./components/Listado/Listado";
import NavBar from './components/NavBar/NavBar';
//import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/listado' element={<Listado/>}/>
      </Routes>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;


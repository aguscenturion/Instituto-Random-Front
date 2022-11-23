import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';
import Rutas from './components/routers/Routes';
import './App.scss'
import "bootstrap/scss/bootstrap.scss"
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <BrowserRouter>
      <Rutas/>
    </BrowserRouter> 
  )
}

export default App

import { useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'
import { loadUser } from '../../redux/actions/auth'
import setAuthToken  from '../../utils/setAuthToken'
import Login from "../../pages/Login"
import Registro from "../../pages/Register"
import Home from "../../pages/Home"
import Materias from '../../pages/Materias/Materias'
import Anuncios from '../../pages/Anuncios/Anuncios'
import ListaAlumnos from '../../pages/Usuarios/ListaAlumnos'
import FormAnuncios from '../../pages/Anuncios/FormAnuncios/FormAnuncios'


import store from '../../redux/store'



const Rutas = () => {
  const token = localStorage.getItem("token")

  if(localStorage.token) {
    setAuthToken(localStorage.token)
  }

  useEffect(() => {
    store.dispatch(loadUser())
   
  }, [])

  return (
    <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Registro />} />
        <Route exact path='/materias' element={<Materias />} />
        <Route exact path='/anuncios' element={<Anuncios />} />
        <Route exact path='/form-anuncios' element={<FormAnuncios />} />
        <Route exact path='/lista-alumnos' element={<ListaAlumnos />} /> 
    </Routes>
  )
}



export default Rutas

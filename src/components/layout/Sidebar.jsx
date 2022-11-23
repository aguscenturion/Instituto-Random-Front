import React from 'react'
import { NavLink } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"

const Sidebar = () => {
  return (
        <div className='sidebar bg-light'>
        <ul>
            <li>
                <NavLink to= "/" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active" ><FaIcons.FaHome className="me-2"/>Inicio</NavLink>
            </li>
            <li>
                <NavLink to= "/materias" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active" ><FaIcons.FaUniversity className="me-2"/>Materias</NavLink>
            </li>
            <li>
                <NavLink to="/anuncios" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active" ><FaIcons.FaVoteYea className="me-2"/>Anuncios</NavLink>
            </li>
            <li>
                <NavLink to="/lista-alumnos" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active" ><FaIcons.FaUsers className="me-2"/>Lista Alumnos</NavLink>
            </li>
        </ul>
    </div> 
    
  )
}

export default Sidebar
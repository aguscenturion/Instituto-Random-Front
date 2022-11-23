import React, { useState } from 'react'
import { 
  MDBCard,
  MDBCardBody, 
  MDBInput, 
  MDBCardFooter, 
  MDBValidation, 
  MDBBtn, 
  MDBIcon,
  MDBValidationItem, 

} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux"

import { login } from "../redux/actions/auth";

const Login = ({login, isAuthenticated}) => {

  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    dni: "",
    contrasenia: ""
  })

  //se desestructura los valores del formulario
  const {dni, contrasenia} = formData
  //almaceno la referencia de useDispatch en una variable

  const handleChange = e => setFormData({...formData, [e.target.name] : e.target.value})

  const handleOnSubmit = async (e) => { 
    e.preventDefault()
    login(dni, contrasenia)
  }

  if(isAuthenticated) return navigate("/");
 
  return (
    <div style={{
      margin: "auto", 
      padding: "15px", 
      maxWidth: "450px", 
      alignContent: "center", 
      marginTop: "120px",
      }}
    >
      <MDBCard alignment="center">
        <MDBIcon fas icon= "university" className= "fa-2x" />
        <h5>Sign In</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={(e) => {handleOnSubmit(e)}} isValidated className="row g-3">
            <MDBValidationItem feedback='El Usuario es Obligatorio' invalid className="col.md-12">
                <MDBInput 
                label="Usuario"
                type="string"
                value={dni}
                name="dni"
                onChange={e => handleChange(e)}
                required
                /> 
            </MDBValidationItem>  
            <MDBValidationItem feedback='La contraseña es Obligatoria' invalid className="col.md-12">
                <MDBInput 
                label="Contraseña"
                type="password"
                value={contrasenia}
                name="contrasenia"
                onChange={e => handleChange(e)}
                required
                />
            </MDBValidationItem>  
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2">
               {/*  {loading && (
                  <MDBSpinner
                  size="sm"
                  role="status"
                  tag="span"
                  className="me-2"
                  />
                )} */}
                Ingresar
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to= "/register">
          <p>¿Olvidaste tu contraseña o sos un usuario nuevo?</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  )
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
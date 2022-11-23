import React, { useState } from "react";
import { 
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarBrand
} from "mdb-react-ui-kit";

import { logout } from "../../redux/actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const Navbar = ( {logout} ) => {
    const [show, setShow] = useState();
  return (
    <MDBNavbar fixed="top" expand="lg" style={{backgroundColor: "#f0e6ea"}}>
        <MDBContainer>
            <MDBNavbarBrand 
                href="/login" 
                style={{color: "#606080", fontWeight: "600", fontSize: "22px"}}>
                Instituto Random
            </MDBNavbarBrand>
            <MDBNavbarToggler
                type="button"
                aria-expanded="false"
                aria-label="Toogle navigation"
                onClick={() => setShow(!show)}
                style={{color: "#606080"}}
            >
                <MDBIcon icon="bars" fas/>
            </MDBNavbarToggler>
            <MDBCollapse show={show} navbar>
                <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
                    <MDBNavbarItem>
                        <MDBNavbarLink href="/home">
                            <p className="navbar-text">Home</p>
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href="/login">
                            <p className="navbar-text" onClick={logout}>Loguearse</p>
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href="/login">
                            <p className="navbar-text">Cerrar Sesion</p>
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
    </MDBNavbar>
  )
}

Navbar.propTypes = {
    logout : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    auth: state.auth
  }) 

export default connect(mapStateToProps, {logout})(Navbar);
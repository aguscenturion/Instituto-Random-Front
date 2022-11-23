import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {  logout } from '../../redux/actions/auth'
import * as FaIcons from "react-icons/fa"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
const Navegador = ({logout, auth : {user}}) => {
  
  return (
    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>INSTITUTO RANDOM</NavbarBrand>
          <NavbarToggler /* onClick={this.toggle} */ />
          <Collapse /* isOpen={this.state.isOpen} */ navbar>
            <Nav className="ms-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <FaIcons.FaUser className="me-2" />{user?.nombre} {user?.apellido}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="text-center">
                    Mi Perfil
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="text-center" onClick={logout} href="/login">
                    Salir
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  )
}

Navegador.propTypes = {
  logout : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
}) 

export default connect(mapStateToProps, {logout})(Navegador)
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {NavLink , Link} from 'react-router-dom'
import {FiAlignJustify} from 'react-icons/fi'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header-section">
        <div className="pic-overlay"></div>
        <Navbar expand="md">
            <div className="container">
                <Link to='/' className="navbar-brand">Anime</Link>
                {/* <NavbarToggler onClick={toggle} /> */}
                <button className="navbar-toggler" onClick={toggle}>
                    <FiAlignJustify />
                </button>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to='/About' className="nav-link">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/Reviews' className="nav-link">Reviews</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/Login' className="nav-link">Sign in</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto navbar-nav">
                        <NavItem>
                            <NavLink to='/Registration' className="nav-link">Sign up</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    </div>
  );
}

export default Header;
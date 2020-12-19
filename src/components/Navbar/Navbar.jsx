import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBLink, MDBBtn } from "mdbreact";
import resume from "../../files/resume.pdf";

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar className="sticky-top" color="elegant-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text zach">Zachary Creek</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/portfolio">Portfolio</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
                <MDBBtn 
                    className="waves-effect waves-light black-text" 
                    gradient="juicy-peach"
                    size="sm"
                    onClick={() => {
                        window.open("https://github.com/vivid-green");
                    }}
                ><MDBIcon fab icon="instagram" size="2x"/></MDBBtn>
                <MDBBtn 
                    className="waves-effect waves-light black-text" 
                    gradient="juicy-peach"
                    size="sm"
                    onClick={() => {
                        window.open("https://www.linkedin.com/in/zacharycreek/");
                    }}
                ><MDBIcon fab icon="linkedin" size="2x"/></MDBBtn>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
import React, { Component } from 'react';
import { Fragment } from 'react';
import './App.css';
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  // NavbarBrand,
  // Nav,
  // NavItem,
  // NavLink,
  // Container
  // Row,
  // Col,
  // Jumbotron,
  // Button
} from 'reactstrap';

class AppFooter extends Component {

render() {
    return (
<Fragment>
<div className="fixed-bottom">  
  
  <Navbar color="dark" dark className = "row text-right">
    <div></div>
          
      <div className="col-12 col-md-auto text-right">
      <p className="text-light text-right">&copy; {(new Date().getFullYear())} Kyle Santana</p>
    </div>
  </Navbar>
</div>

</Fragment>
    )
}

}

export default AppFooter;
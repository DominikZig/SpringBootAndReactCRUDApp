import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import linkedin from './linkedin-logo.png';
import github from './GitHub-logo.png';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar dark expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://linkedin.com/in/dominik-zigmanov-83a117151">
                            <img src={linkedin} alt="Logo" className={"img-rounded"} height={40} width={40}/>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/DominikZig/SpringBootAndReactCRUDApp">
                            <img src={github} alt="Logo" className={"img-rounded"} height={40} width={40}/>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>;
    }
}
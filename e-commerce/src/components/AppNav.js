import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';

const AppNav = () => ( //className="btn btn-primary btn-rounded btn-sm my-0"  
    <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
        <Navbar.Brand href="/">The Store of Zeus</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                {/* <Nav.Link href="/manageProducts">Manage Your Products</Nav.Link> */}
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Form inline>
                    <FormControl type="text" placeholder="Search Products" className=" mr-lg-3" />
                    <Button type="submit">Submit</Button>
                </Form>
            </Nav>
            <Nav>
                <Nav.Link href="/">Sign Up</Nav.Link>
                <Nav.Link eventKey={2} href="/">Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default AppNav;
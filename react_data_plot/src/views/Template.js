import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { BrowserRouter } from "react-router-dom";

import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";

class Template extends Component {
  
  render() {    
    return (
		<div>
			<Navbar bg="dark" variant="dark" fixed="top">
				<button className="d-lg-none toggle-sidebar"><span className="navbar-toggler-icon"></span></button>
				<Navbar.Brand href="/">CanvasJS Examples</Navbar.Brand><span className="hidden-xs text-muted">React</span>
			</Navbar>		  
			<BrowserRouter>		  
				<Row>
					
					<Sidebar />
					
					<Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
						<Container>
							<Content />								
						</Container>
					</Col>					
				</Row>			
			</BrowserRouter>	
		</div>
    );
  }
}

export default Template;
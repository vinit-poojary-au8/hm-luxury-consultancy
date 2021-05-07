import React from 'react'
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap'
import logo from '../font/logo.png'

function Navs() {
	return (
		<div>
			<Navbar bg='dark' variant='dark' sticky='top'>
				<Navbar.Brand className='mr-auto' href='#home'>
					<img
						src={logo}
						height='40'
						className='d-inline-block align-top mx-4'
						alt=''
					/>
				</Navbar.Brand>
				<Nav
					className='mx-4 justify-content-end'
					style={{ width: '75%' }}>
					<Nav.Link href='#features'>HOME</Nav.Link>
					<Nav.Link href='#features'>BLOG</Nav.Link>
					<NavDropdown
						title='SERVICES'
						id='collasible-nav-dropdown'>
						<NavDropdown.Item href='#action/3.1'>
							Branding
						</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.2'>
							Retail Consulting
						</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.3'>
							Creative Marketing
						</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.4'>
							Fashion Marketing
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Button variant='outline-light'>Contact Us</Button>
			</Navbar>
		</div>
	)
}

export default Navs

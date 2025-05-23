import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary py-3">
            <Container className='d-flex justify-content-center'>
                <Link className='mx-3' style={{ color: "black", textDecoration: "none" }} to="/">My Product App</Link>
                <Link className='mx-3' style={{ color: "black", textDecoration: "none" }} to="/productone">Product 1</Link>
                <Link className='mx-3' style={{ color: "black", textDecoration: "none" }} to="/producttwo">Product 2</Link>

            </Container>
        </Navbar>
    )
}

export default Header
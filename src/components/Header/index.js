import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./index.scss";
import {useLocation} from "react-router-dom";

const Header = () => {
    let location = useLocation();
    return <>
        <Navbar sticky="top" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src='/imgs/logo-branco.png' alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav activeKey={location.pathname} className="nav">
                        <Nav.Link href="/">Sobre</Nav.Link>
                        <Nav.Link href="/projetos">Projetos</Nav.Link>
                        <Nav.Link href="#contato">Contato</Nav.Link>
                        <Nav.Link target="_blank" href="https://drive.google.com/file/d/1v_xmWppn_b82t_u5MTuRJGpYUJEBB3a-/view?usp=sharing">Currículo</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default Header;
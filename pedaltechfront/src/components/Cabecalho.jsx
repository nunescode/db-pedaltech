import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import styles from "../styles/Cabecalho.module.css"
import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'

const Cabecalho = () => {
    return (
        <>
            <Navbar className={`${styles.navbar} ${styles.navbarbrand}`} variant="dark">
                <Container>
                    <Navbar.Brand href="/">PEDAL TECH</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className={styles.navlink} href="/">INÍCIO</Nav.Link>
                        <Nav.Link className={styles.navlink} href="/clientes">CLIENTES</Nav.Link>
                        <Nav.Link className={styles.navlink} href="/produtos">ESTOQUE</Nav.Link>
                        <Nav.Link className={styles.navlink} href="/vendas">VENDAS</Nav.Link>
                        <Nav.Link className={styles.navlink} href="/servicos">SERVIÇOS</Nav.Link>
                        <Nav.Link className={styles.navlink} href="/fornecedores">FORNECEDORES</Nav.Link>
                        <Link className={styles.link} href='/'>
                            <BsWhatsapp className={styles.link} size={40}/> WHATSAPP
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Cabecalho
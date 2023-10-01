import Pagina from '../../components/Pagina'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { BiTrash } from 'react-icons/bi'

const Clientes = () => {
    const [clientes, setClientes] = useState([]); // Defina o estado aqui

    function getAll() {
        axios.get('/api/clientes').then(resultado => {
            setClientes(resultado.data); // Atualize o estado aqui
        })
    }

    useEffect(() => {
        getAll()
    }, []);


    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            axios.delete('/api/clientes/' + id)
            getAll()
        }
    }
    return (
        <>
            <Pagina titulo="Clientes Cadastrados">
                <Button size="lg" variant="success" href="/clientes/form">CADASTRAR NOVO CLIENTE</Button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row md={4}>
                    {clientes.map(item => (
                        <Col key={item.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{item.nome}</Card.Title>
                                    <br />
                                    <p ><strong>Telefone: </strong>{item.telefone}</p>
                                    <p ><strong>Endereço: </strong>{item.endereco}</p>
                                    <Button className='btn btn-danger'>
                                        <BiTrash onClick={() => excluir(item.id)} />
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Pagina>
        </>
    )
}

export default Clientes

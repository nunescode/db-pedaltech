import React from "react";
import Pagina from "../../components/Pagina";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Button, Form } from "react-bootstrap";
import { BiSend, BiArrowBack } from "react-icons/bi";

import axios from "axios";
import Link from "next/link";


const form = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { push } = useRouter();

  function salvar(dados) {
    console.log(dados);
    axios.post('/api/clientes', dados)
    push('/clientes')
  }

  return (
    <>
    <div >
      <Pagina titulo="CADASTRAR CLIENTE">
        <Form>
          <Form.Group className="mb-3 text-white" controlId="nome">
            <Form.Label><strong>NOME: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="INSIRA O NOME DO CLIENTE:"
              {...register("nome")}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="telefone">
            <Form.Label><strong>TELEFONE: </strong></Form.Label>
            <Form.Control
              type="number"
              placeholder="INSIRA O TELEFONE DO CLIENTE:"
              {...register("telefone")}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-white" controlId="endereco">
            <Form.Label><strong>ENDEREÇO: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="INSIRA O ENDEREÇO DO CLIENTE:"
              {...register("endereco")}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="cpf">
            <Form.Label><strong>CPF: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="INSIRA O CPF DO CLIENTE:"
              {...register("cpf")}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="email">
            <Form.Label><strong>EMAIL: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="INSIRA O EMAIL DO CLIENTE:"
              {...register("email")}
            />
          </Form.Group>

          <div className="text-center">
            <Button
              className="ms-2 btn btn-success" type="submit" onClick={handleSubmit(salvar)}>
              <BiSend className="me-2" /> Salvar
            </Button>
            <Link href="/clientes" className="ms-2 btn btn-danger" type="submit">
              <BiArrowBack className="me-2"/> Voltar
            </Link>
          </div>
        </Form>
      </Pagina>
    </div>
    </>
  );
};

export default form;
import React from 'react';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'react-toastify/dist/ReactToastify.css';
function Checkout() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    

    setValidated(true);
    
  };
  

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
           
          />
      
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Telefono</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="Telefono"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingresa tu teléfono
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Ciudad" required />
          <Form.Control.Feedback type="invalid">
            Ingresa tu Ciudad
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label> Partido </Form.Label>
          <Form.Control type="text" placeholder="Partido" required />
          <Form.Control.Feedback type="invalid">
            Ingresa tu partido
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="text" placeholder="Direccion" required />
          <Form.Control.Feedback type="invalid">
            Ingresa tu Direccion
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Estoy de Acuerdo con los terminos y condiciones"
        />
      </Form.Group>
      <Button type="submit">Finalizar Compra</Button>
    </Form>
  );
}
export default Checkout;

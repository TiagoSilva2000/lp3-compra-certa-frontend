import { FormatListNumbered } from '@material-ui/icons'
import React from 'react'
import { Button, Col, Container, Form, ListGroup } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { states } from '../../constants/states.constant'
import { ProductRowData } from '../../types/product-row-data'
import { StyledPaymentPage, StyledTotalWrapper } from './style'
import { rows as mockedRows } from '../../constants/product-rows.constant'
import { Card } from '@material-ui/core'
interface IPaymentPageProps {
  rows: ProductRowData[]
}

export default class PaymentPage extends React.Component<IPaymentPageProps> {
  render(): JSX.Element {
    const rows = this.props.rows ?? mockedRows

    const total = rows.reduce<number>((acc, curr) => acc + curr.total, 0)

    return (
      <>
        <Header customerView />
        <StyledPaymentPage>
          <Container fluid>
            <Container className='payment-body-wrapper'>
              <div className='payment-form-wrapper'>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId='form-name'>
                      <Form.Label>Nome</Form.Label>
                      <Form.Control type='text' placeholder='Enter name' />
                    </Form.Group>
                    <Form.Group as={Col} controlId='form-cpf'>
                      <Form.Label>CPF</Form.Label>
                      <Form.Control type='text' placeholder='000.000.000-00' />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId='form-email'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId='form-address'>
                      <Form.Label>Endereço</Form.Label>
                      <Form.Control type='text' placeholder='address' />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId='form-city'>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Insira sua cidade'
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId='form-state'>
                      <Form.Label>State</Form.Label>
                      <Form.Control as='select' defaultValue='...'>
                        {states.map((state, idx) => (
                          <option key={`st${idx}`}>{state}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId='form-cep'>
                      <Form.Label>CEP</Form.Label>
                      <Form.Control type='text' placeholder='00000-000' />
                    </Form.Group>
                  </Form.Row>
                  <Button variant='primary' type='submit'>
                    Confirmar
                  </Button>
                </Form>
              </div>
              <Container>
                <h2>Carrinho</h2>
                <ListGroup className='product-list'>
                  {rows.map((row, idx) => (
                    <ListGroup.Item key={`pw${idx}`} className='product-holder'>
                      <Card className='product-holder-number'>{idx + 1}</Card>{' '}
                      <span>{row.product}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <hr />
                <Container>
                  <StyledTotalWrapper>
                    <p>
                      <b>Total: </b> <span>R$ {total}</span>
                    </p>
                  </StyledTotalWrapper>
                </Container>
                <hr />
              </Container>
            </Container>
          </Container>
        </StyledPaymentPage>
        <Footer />
      </>
    )
  }
}

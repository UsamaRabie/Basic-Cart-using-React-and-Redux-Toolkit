import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, clearCart } from '../react toolkit/slices/Cart-slice';
import Price from './Price';

function Cart() {
  const carts = useSelector((state)=>state.carts)
  const dispatch = useDispatch()

  return (
    <Container style={{textAlign:"center"}}>
      <h1 className='py-5'>Welcome to cart</h1>
      <Price/>
      <Row>
        <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Img</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {carts.map(product => (
                <tr key={product.id}>
                  <td className='text-center'>{product.id}</td>
                  <td className='text-center'>{product.title}</td>
                  <td className='text-center'><img src={product.image} style={{ height: '50px' }} alt={product.title} /></td>
                  <td className='text-center'>{product.price}$</td>
                  <td className='text-center'>{product.quantity}</td>
                  <td className='text-center'><Button variant="danger"  style={{fontSize:"10px"}} onClick={()=>dispatch(deleteFromCart(product))}> Delete</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      {carts.length > 0 && (
        <Row className='py-5'>
          <Col>
            <Button variant="danger" className='w-100' onClick={() => dispatch(clearCart())}>
              Clear All Products
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Cart
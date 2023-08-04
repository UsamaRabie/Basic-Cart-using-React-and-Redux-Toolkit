import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../react toolkit/slices/Products-slice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { addToCart } from '../react toolkit/slices/Cart-slice';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const carts = useSelector((state)=> state.carts);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  
  return (
    <Container className='my-5'>
      <Row className='py-5' >
        {products.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={4} style={{marginBottom:"50px" , textAlign:"center"}}>
            <Card  className='bg-warning'>
              <Card.Img variant="top" style={{ height: '250px' }} src={product.image} />
              <Card.Body >
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  price = {product.price} $
                </Card.Text>
                <Card.Text>
                  category : {product.category}
                </Card.Text>
                <Card.Text style={{ maxHeight: '150px', overflowY: 'auto' }} >
                  description : {product.description}
                </Card.Text>
                <Button variant="primary" 
                onClick={()=>dispatch(addToCart(product))} >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
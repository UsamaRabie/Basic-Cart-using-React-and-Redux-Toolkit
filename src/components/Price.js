import React from 'react'
import { useSelector } from 'react-redux'

function Price() {
  const carts = useSelector((state)=>state.carts)
  const totalPrice = () => {
    let price = 0;
    carts.map((product) => {
      price = price + product.price * product.quantity;
    });
    return price.toFixed(2);;
  }
  return (
    <div>Total Price =  {totalPrice()}</div>
  )
}

export default Price
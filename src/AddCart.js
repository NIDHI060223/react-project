import React, { useState, useEffect } from 'react';
import './Custom.css';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

function AddCart() {
  const { cart, setCart } = useCart();
  const [quantities, setQuantities] = useState(cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {}));
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Cart items:", cart);
    console.log("Quantities:", quantities);
  }, [cart, quantities]);

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, prevQuantities[id] - 1),
    }));
  };

  const handleDelete = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[id];
      return updatedQuantities;
    });
  };

  const getTotalPrice = () => {
    const total = cart.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      if (isNaN(itemPrice)) {
        console.error(`Invalid price for item ${item.id}: ${item.price}`);
        return total;
      }
      return total + itemPrice * quantities[item.id];
    }, 0);
    console.log("Total Price:", total);
    return total.toFixed(2);
  };

  const handleShopping = ()=>{
    navigate('/shop');
  }

  return (
    <div>
      <div className="container">
        <h2>Shopping Cart</h2>
      </div>
      <div className="cart_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cart_container">
                <div className="cart_title">Shopping Cart<small> ({cart.length} item{cart.length > 1 && 's'} in your cart) </small></div>
                <div className="cart_items">
                  {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                  ) : (
                    <ul className="cart_list">
                      {cart.map((item) => (
                        <li className="cart_item clearfix" key={item.id}>
                          <div className="cart_item_image"><img src={`/assets/img/${item.img}`} alt={item.name} /></div>
                          <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                            <div className="cart_item_name cart_info_col">
                              <div className="cart_item_title">Name</div>
                              <div className="cart_item_text">{item.name}</div>
                            </div>
                            <div className="cart_item_quantity cart_info_col">
                              <div className="cart_item_title">Quantity</div>
                              <div className="cart_item_text">
                                <button className='cart_item_quantity_button' onClick={() => handleDecrement(item.id)}>-</button>
                                {quantities[item.id]}
                                <button className='cart_item_quantity_button' onClick={() => handleIncrement(item.id)}>+</button>
                              </div>
                            </div>
                            <div className="cart_item_price cart_info_col">
                              <div className="cart_item_title">Price</div>
                              <div className="cart_item_text">${parseFloat(item.price).toFixed(2)}</div>
                            </div>
                            <div className="cart_item_total cart_info_col">
                              <div className="cart_item_title">Total</div>
                              <div className="cart_item_text">${(parseFloat(item.price) * quantities[item.id]).toFixed(2)}</div>
                            </div>
                            <div className="cart_item_delete cart_info_col">
                              <button className='cart_item_delete_button btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="order_total">
                  <div className="order_total_content text-md-right">
                    <div className="order_total_title">Order Total:</div>
                    <div className="order_total_amount">${getTotalPrice()}</div>
                  </div>
                </div>
                <div className="cart_buttons">
                  <button type="button" className="button cart_button_clear" onClick={handleShopping}>Continue Shopping</button>
                  <button type="button" className="button cart_button_checkout">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCart;

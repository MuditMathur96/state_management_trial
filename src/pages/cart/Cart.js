import React, { useContext, useState, useEffect } from 'react';
import { appContext } from '../../context/context';
import Layout from '../../components/layout/Layout';
import "./Cart.css";

const Cart = () => {
     const [state, dispatch] = useContext(appContext);
     const [total, setTotal] = useState(0);
     const addToCart = (product) => {
          var index = state.cart.indexOf(product);
          if (index > -1) {
               var newProduct = { ...product, quantity: product.quantity + 1 }
               console.log("product sent", newProduct);

               dispatch({
                    type: "addToCart",
                    payload: newProduct
               })

          }
          

     }

     useEffect(() => {
          cartTotal();
     },[state.cart]);


     const cartTotal = () => {
          var tempTotal =0;
          state.cart.forEach(
               item => tempTotal += (item.priceOfOne*item.quantity)
          );
          setTotal(tempTotal);
          console.log(total);

     }
     const removeFromCart = (product) => {
               const newProduct = {...product,quantity:product.quantity-1}
               dispatch({type:"removeFromCart",payload:newProduct});
     }


     return (
          <div>
               <Layout>
                    <h1>Your Cart</h1>
                    <table style={{ marginTop: "20px" }} className="table table-trim">
                         <thead>
                              <tr>
                                   <th>
                                        Product Name
                                   </th>
                                   <th>
                                        Quantity
                                   </th>
                                   <th>
                                        Price
                                   </th>
                              </tr>
                         </thead>
                         <tbody>
                              {state.cart.length > 0 ? (
                                   state.cart.map((item) => (

                                        <tr key={item.id}>
                                             <td>{item.name}</td>
                                             <td>

                                                  <a onClick={()=>removeFromCart(item)} >-</a>
                                                  <span style={{ marginLeft: 5, marginRight: 5 }}>
                                                       {item.quantity}
                                                  </span>
                                                  <a onClick={() => addToCart(item)}>+</a>
                                             </td>
                                             <td>
                                                  {item.quantity * item.priceOfOne}

                                             </td>
                                        </tr>

                                   ))

                              ) : (
                                   <tr>
                                        <td colSpan="3">
                                             <h3>No Data Found</h3>
                                        </td>
                                   </tr>
                              )}


                         </tbody>
                    </table>
                    <hr />
                    <div>
                         <h4>Total: Rs.{total}</h4>
                    </div>
               </Layout>
          </div>
     )
}
export default Cart;

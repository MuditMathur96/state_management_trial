import React from 'react'
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
import PrivateRoute from './privateRoute/PrivateRoute';
import Home from '../pages/home/Home';
import Counter from '../pages/counter/Counter';
import Cart from '../pages/cart/Cart';

const Router = () => {
     return (
          <div>
               <BrowserRouter>
          <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute >
          <Route path="/cart" component={Cart}></Route>
          </PrivateRoute>


          <PrivateRoute >
                 <Route path="/counter"  component={Counter}/>
          </PrivateRoute>
            
          </Switch>
        </BrowserRouter>
          </div>
     )
}
export default Router

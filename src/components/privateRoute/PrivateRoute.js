import React,{useContext} from 'react';
import {appContext} from '../../context/context';
import {Route,Redirect} from 'react-router-dom';

 const PrivateRoute = ({children,...rest}) => {

     const context = useContext(appContext);
     const [state] = context;
     
    return(
         <Route {...rest} render={({location})=>
              state.isAuthenticated?(
               children
              ):(
                   <Redirect to="/" exact ></Redirect>
              )
         }></Route>
    )
}

export default PrivateRoute;

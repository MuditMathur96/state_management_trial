import React,{useState,useReducer} from 'react';
//import reducer from './reducer';
import reducer from "./reducer";


export const appContext = React.createContext();





const InitialState ={
     isAuthenticated :false,
     user:null,
     data:null,
     counter:0
};

const ContextProvider =({children})=>{
     const [state,dispatch] = useReducer(reducer,InitialState);

     return (
          <appContext.Provider value={[state , dispatch]}>
               {children}
          </appContext.Provider>
     )
     

}

export default ContextProvider;


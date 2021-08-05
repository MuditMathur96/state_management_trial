import React,{useState,useContext} from 'react';
import Layout from '../../components/layout/Layout';
import {appContext} from '../../context/context';

import {Button,ButtonGroup} from 'reactstrap';

const Counter = () => {

     const context = useContext(appContext);
     const dispatch = context[1];
     const state =  context[0];
  //console.log(state);
     //console.log("data from counter",context);
     return (
          
          <div>
               <Layout>
                    <ButtonGroup>
                         <Button  onClick={()=>dispatch({type:"decrement"})}>-</Button>
                         <div className="ml-1 mr-1" style={{alignSelf:"center"}}>
                              {state.counter}
                         </div>
                         <Button onClick={()=>dispatch({type:"increment"})} >+</Button>
                    </ButtonGroup>
               </Layout>
               
          </div>
     )
}

export default Counter

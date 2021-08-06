import React,{useState,useContext} from 'react'
import { Navbar,Collapse,NavbarToggler
     ,Nav,NavItem,NavLink,UncontrolledDropdown,
     DropdownToggle,DropdownMenu,DropdownItem,Badge          
} from 'reactstrap';

import { Link } from "react-router-dom";
import {appContext} from '../../context/context';
export const NavigationTab = () => {

     const [isOpen,setIsOpen] = useState(false);
     const context = useContext(appContext);
     const [state,dispatch] = context;
   //  console.log("context: ",context[1]);
     return (
          <div>
               <Navbar color="dark" dark  expand="md">
                    
                    <Link className="navbar-brand" style={{color:'white'}} to ="/">
                    My State Changer
                    </Link>
                    
                    
                    <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
                    <Collapse  isOpen={isOpen} navbar  >
                        <Nav className="ml-auto" navbar>
                       
                           {
                                   state.isAuthenticated ? (
                                        <NavItem>
                                        <Link className="nav-link"  to="/counter">Counter</Link>

                                        </NavItem>
                                   ) : null
                         }   
                                   
                              
                         
                         {
                                   state.isAuthenticated ? (
                                        <NavItem>
                                             <Link className="nav-link" to="/cart">Cart<Badge>{state.cart.length}</Badge></Link>

                                        </NavItem>
                                   ) : null
                         }
                         

                         {!context[0].isAuthenticated?<NavItem>
                              <NavLink onClick= {()=>dispatch({type:"login"})}>Login</NavLink>
                         </NavItem>:null}



                         {context[0].isAuthenticated?<UncontrolledDropdown nav inNavbar>
                              <DropdownToggle nav caret>Options</DropdownToggle>
                              <DropdownMenu right>
                                   <DropdownItem>
                                        Profile
                                   </DropdownItem>
                                   <DropdownItem onClick={()=>dispatch({type:"logout"})}>
                                        Logout
                                   </DropdownItem>
                                   <DropdownItem divider />
                                   <DropdownItem>
                                        Other Options
                                   </DropdownItem>
                              </DropdownMenu>
                         </UncontrolledDropdown>:null}
                        </Nav>
                    </Collapse>
               </Navbar>
          </div>
     )
}
export default NavigationTab;
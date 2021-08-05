import React,{useState,useReducer,useContext} from 'react'
import { Navbar,Collapse,NavbarToggler
     ,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,
     DropdownToggle,DropdownMenu,DropdownItem,NavbarText          
} from 'reactstrap';

import { Link } from "react-router-dom";
import {appContext} from '../../context/context';
export const NavigationTab = () => {

     const [isOpen,setIsOpen] = useState(false);
     const context = useContext(appContext);
     const dispatch = context[1];
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
                        <NavItem>
                              
                              <Link className="nav-link"  to="/counter">Counter</Link>
                              
                              
                                   
                              
                         </NavItem>
                         <NavItem>
                              <NavLink href="/">Pages</NavLink>
                         </NavItem>

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
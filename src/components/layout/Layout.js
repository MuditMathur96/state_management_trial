import React from 'react'
import { Container } from 'reactstrap';
import NavigationTab from '../navigationtab/NavigationTab';
 const Layout = ({children}) => {
     return (
          <div>
               <NavigationTab/>

               <Container>
                    {children}
               </Container>
          </div>
     )
}

export default Layout;
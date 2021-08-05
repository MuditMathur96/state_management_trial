import {Button} from 'reactstrap';
import Layout  from './components/layout/Layout';


import ContextProvider from './context/context';
import Router from './components/Router';

const App = ()=>{
  return (
    <div>
    <ContextProvider>
        <Router />
      </ContextProvider>
    </div>
  )
}
export default App;
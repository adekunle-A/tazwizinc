import React, {useEffect} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import MenuBar from './components/MenuBar';
import {ProductProvider} from './context/ProductContext'
import Dashboard from './pages/Dashboard';
import Products from './components/Products';
import Customers from './components/Customers';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import { CustomerProvider } from './context/CustomerContext';
import {UserProvider} from './context/UsersContext';
import ErrorPage from './components/ErrorPage'
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const token = localStorage.getItem('authToken');
  
  return (
    <BrowserRouter>
      < UserProvider>
          <CustomerProvider>
            <ProductProvider>
              <div className="App">
                  <MenuBar />
                  <Switch>
                    <Route path="/" exact={true} component={Login}/>
                    <Route path="/logout" exact={true} component={Login}/>
                    <ProtectedRoute exact path="/dashboard" auth={token !== null}  component={Dashboard}/>
                    <ProtectedRoute exact path="/products" component={Products}/>
                    <ProtectedRoute exact path="/customers" component={Customers}/>
                    <Route  path="*"component={ErrorPage}/>
                  </Switch>
              </div>
            </ProductProvider>
          </CustomerProvider>
        </ UserProvider>
    </BrowserRouter>
  );
}

export default App;

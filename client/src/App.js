import React, {useState,useEffect} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import MenuBar from './components/MenuBar';
import {ProductProvider} from './context/ProductContext'
import Dashboard from './pages/Dashboard';
import Products from './components/Products';
import Customers from './components/Customers';
import {BrowserRouter, Switch,Redirect,Route} from 'react-router-dom'
import { CustomerProvider } from './context/CustomerContext';
import {UserProvider} from './context/UsersContext';
import ErrorPage from './components/ErrorPage'
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const token = localStorage.getItem('authToken');
  const [user, setUser] = useState(false);
  var isAuth = false;
useEffect(() => {
  console.log(token)
  console.log(token != null)
  if(token != null || token != ''){
    console.log(token)
    setUser(true)
  }
})
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
                    <ProtectedRoute exact path="/dashboard" auth={token != null}  component={Dashboard}/>
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

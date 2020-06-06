import React, {useState,useContext} from 'react'
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <CustomerProvider>
        <ProductProvider>
            <div className="App">
                <MenuBar />
                {/* <Login /> */}
                <Switch>
                  {/* <Route path="/" exact={true} component={Login}></Route> */}
                  < Route exact path="/">
                    {isLoggedIn ? <Redirect to="/dashboard" /> : <Dashboard />}
                  </Route>
                  <Route path="/products" exact component={Products}/>
                  <Route path="/customers" exact component={Customers}/>
                  <Route path="/dashboard" exact component={Dashboard}/>
                </Switch>
                <Dashboard />
            </div>
        </ProductProvider>
      </CustomerProvider>
    </BrowserRouter>
  );
}

export default App;

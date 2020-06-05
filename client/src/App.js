import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import MenuBar from './components/MenuBar';
import {ProductProvider} from './context/ProductContext'
import Dashboard from './pages/Dashboard';
import { CustomerProvider } from './context/CustomerContext';
function App() {
  return (
    <CustomerProvider>
      <ProductProvider>
          <div className="App">
              <MenuBar />
              {/* <Login /> */}
              <Dashboard />
          </div>
      </ProductProvider>
    </CustomerProvider>
  );
}

export default App;

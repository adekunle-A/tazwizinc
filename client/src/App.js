import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <div className="App">
      <MenuBar />
      {/* <Login /> */}
      <Dashboard />
    </div>
  );
}

export default App;

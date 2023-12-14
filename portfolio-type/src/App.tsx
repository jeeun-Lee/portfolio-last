import React from 'react';
import { Outlet } from 'react-router-dom';
import "./assets/reset.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <Outlet />
    
    </div>
  );
}


export default App;

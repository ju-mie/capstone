import './utils/variables.css';
import './App.css';
import React from 'react';
import { Routes, Route }  from "react-router";
import routes from './Router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main>
          <Routes>
            {routes.routes && routes.routes.length > 0 && (
              routes.routes.map((route) => (
                <Route path={route.path} element={route.element}/>
              ))
            )}
          </Routes>
        </main>
        <Footer/>
      </>
    </div>
  );
}

export default App;

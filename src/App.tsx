import React from 'react';
import './App.scss';
import Main from './components/UI/layout/Main';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Main title="ReactMeals">
        <Home></Home>
      </Main>
    </div>
  );
}

export default App;

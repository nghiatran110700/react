import logo from './logo.svg';
import './App.css';
import ShoppingList from './component/ShopList';
import Clock from './component/Clock';
import React, { useState, useEffect } from 'react';
import Modal from './component/Modal/Modal'
import useModal from './component/Modal/useModal';

function MyButton() {
  function handleClick(){
      console.log('test click')
  }

  return (
    <button onClick={handleClick}>I'm a button</button>
  );
}

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const {isShowing, toggle} = useModal();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
        <MyButton/>
        <ShoppingList/>
        <Clock time={currentTime}/>
      </header>
    </div>
  );
}

export default App;

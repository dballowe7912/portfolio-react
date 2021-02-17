import React from 'react';
import Header from './components/header/Header.component';
import Navbar from './components/navbar/Navbar.component';
import MainContent from './components/main-content/MainContent.component';
import Modal from './components/modal/Modal.component';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header/>
        <MainContent/>
        {/* <Modal/> */}
      </div>
    );
  }
}

export default App;

import React from 'react';
import Header from './components/header/Header.component';
import Navbar from './components/navbar/Navbar.component';
import MainContent from './components/main-content/MainContent.component';
import Modal from './components/modal/Modal.component';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNav: false
    }

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      showNav: !this.state.showNav
    })
  }
  

  render() {
    console.log()
    return (
      <div className="App">

        {this.state.showNav && <Navbar/>}
        
        <Header toggleNavbar={this.toggleNavbar}/>
        {/* <MainContent/> */}
        {/* <Modal/> */}
      </div>
    );
  }
}

export default App;

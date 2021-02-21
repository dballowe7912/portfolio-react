import React from 'react';
import Header from './components/header/Header.component';
import Navbar from './components/navbar/Navbar.component';
import MainContent from './components/main-content/MainContent.component';
import Modal from './components/modal/Modal.component';
import About from './components/about/About';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Portfolio from './components/portfolio/Portfolio';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNav: false
    }

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState({showNav: !this.state.showNav})
  }

  

  render() {
    return (
      <div className="App">
        <Header toggleNav={this.toggleNav}/>
        {this.state.showNav ? <Navbar toggleNav={this.toggleNav}/> : ''}
        <Switch>
          <Route exact path="/home" component={MainContent}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Modal}/>
        </Switch>



        {/* <About/> */}
        {/* <Header toggleNav={this.toggleNav}/> */}
        {/* <MainContent/> */}
        {/* <Modal/> */}
      </div>
    );
  }
}

export default App;

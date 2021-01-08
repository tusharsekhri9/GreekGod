import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Elinks from './components/Elinks';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import BlogPage from './components/BlogPage';
import DetailedLook from './components/DetailedLook';
import ContactMe from './components/ContactMe';
import Proportions from './components/Proportions';
import Register from './components/Register';
import Login from './components/Login';
import Base from './components/Base';
import Home from './components/Home';
import axios from 'axios';

class App extends Component {
  state = {
    status: ''
  }
  addMessage = (n, e, c) => {
    axios
      .post('http://localhost:5000/message', {
        name: n,
        email: e,
        content: c
      })
      .then(res => {
        console.log("Test");
        this.setState({ status: res.status });
      });
  };
  addNewUser = (n, e, p1, p2) => {
    console.log(n);
    console.log(e);
    console.log(p1);
    console.log(p2);
    console.log(p1===p2);
    axios
      .post('http://localhost:5000/users/register', {
        name: n,
        email: e,
        password: p1,
        password2: p2 
      })
      .then(res => {
        console.log("Test");
        this.setState({ status: res.status });
      });
  };

  loginUser = (e, p) => {
    axios
      .post('http://localhost:5000/users/login', {
        email: e,
        password: p
      })
      .then(res => {
        console.log("Test");
        this.setState({ status: res.status });
      });
  };

  render() {
    return (
      <Router>
        <Route path="/register" render={(props) => <Register addNewUser={this.addNewUser} status={this.state.status} />} />
        <Route path="/login" render={(props) => <Login loginUser={this.loginUser} status={this.state.status} />} />        
      </Router>
    );
  }
}

export default App;

//<Proportions addMessage={this.addMessage} status={this.state.status} />

      /*<Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/blog_page" component={BlogPage} />
        <Route path="/contact_me" render={(props) => <Proportions addMessage={this.addMessage} status={this.state.status} />} />
        <Elinks />
      </Router>*/
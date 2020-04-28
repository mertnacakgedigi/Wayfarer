import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Routes from './config/routes'
import UserModel from './models/user'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    currentUser: localStorage.getItem('uid')
  }
  }


  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId })
    localStorage.setItem('uid', userId)
  }

  logout = (event) => {
    event.preventDefault();

    localStorage.removeItem('uid')
    UserModel.logout()
      .then(res => {
        console.log(res)
        this.setState({ currentUser: null })
        this.props.history.push('/login')
      })
      .catch(err => console.log(err))
  }



  render() {
    return (
      <div>
        <Navbar  currentUser={this.state.currentUser} 
          logout={this.logout}   />
     <Routes currentUser={this.state.currentUser} 
            setCurrentUser={this.setCurrentUser} />

      </div>
    );
  }
}


export default withRouter(App);

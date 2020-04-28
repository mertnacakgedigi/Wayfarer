import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Cities from '../components/Cities'
import Register from '../components/Register'
import Profile from '../components/Profile'
import Login from '../components/Login'

export default (props) => (
  <Switch>
    <Route exact path="/" component={ Home } />

    <Route path="/login" render={ (routeProps) => {
      // An example of adding props to a component rendered by react router
      return <Login 
                { ...routeProps }
                show={true}
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    } } />
    <Route path="/profile" render={(routeProps)=>{
      return <Profile 
                { ...routeProps }
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    }} />
    <Route path="/register" component={ Register } />


    <Route exact path="/cities" render={(routeProps)=>{
      return <Cities 
                { ...routeProps }
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
      />
    }} />
    <Route path="/cities/:id" render={(routeProps)=>{
      return <Cities 
                { ...routeProps }
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
      />
    }} />

  </Switch>
)
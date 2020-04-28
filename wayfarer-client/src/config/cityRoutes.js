import React from 'react'
import city from '../components/city'
import { Switch, Route } from 'react-router-dom'

export default (props) => (
<Switch>
    <Route path="/cities/:id" render={(routeProps)=>{
    	console.log("inside route")
      return <city 
                { ...routeProps }
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    }} />
</Switch>
	)
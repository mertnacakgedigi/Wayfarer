import React, { Component } from 'react'
//import Modal from 'react-modal';
import { Modal } from 'react-bootstrap';
import UserModel from '../models/user'
import CityModel from '../models/city'
//import Select from 'react-select';
import Select from "react-virtualized-select";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    // store the default values for the fields in the register form
    username: '',
    password: '',
    profile_name:'',
    city:'',
    cities:[],
    show:true
    
  }
  let citiesArray=CityModel.getAllCities()
    .then(res=>{
      let citiesArray=res.data.map(city=>(
            {label:city.name,value:city._id}
        ))
        this.setState({
          cities:citiesArray
        })
      })
    .catch(err=>console.log(err))




  }
 

  // handles changes made to the form fields: handleChange()
  handleChange = (event) => {
    // console.log(event)
    // set state with the value from the input
    this.setState({
        [event.target.name]: event.target.value
    })
  }
  handleSelectChange=(event)=>{
    this.setState({
      'city':event.value
    })

  }

  // handles submit event when the user submits the form: handleSubmit()
  handleSubmit = (event) => {
    // stop the default form event from firing
    event.preventDefault()
    // make an axios call to the API register route
    UserModel.create(this.state)
      .then(res => {
        this.setState({
          username: '',
          password: '',
          profile_name:'',
          city:'',
          showModal:true
        })
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  
handleClose=()=>{
this.props.history.push('/')
}





  render() {
   
  //console.log(this.state.cities)

    return (

      <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h4 className="mb-3">Register</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">UserName</label>
                <input 
                    onChange={this.handleChange} 
                    className="form-control form-control-lg" 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={this.state.username}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
              </div>
              <div className="form-group">
                <label htmlFor="name">You name</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="profile_name" name="profile_name" value={this.state.profile_name} />
              </div>
              <div className="form-group">
{/*                <label htmlFor="name">City</label>
               <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="city" name="city" value={this.state.city} />*/}
{/*                  <select value={this.state.city}  onChange={this.handleSelectChange}>
                  {options.map(e=>(
                      <option value={e.value}>{e.lable}</option>
                    ))}
            </select>*/}
                <Select value={this.state.city} onChange={this.handleSelectChange}  options={this.state.cities}  placeholder= 'city'/>
              </div>
              <button className="btn btn-primary float-right" type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
      </Modal>

    );
  }
}

export default Register;

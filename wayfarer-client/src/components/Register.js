import React, { Component } from 'react'
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
    cities:[]
  }
  let citiesArray=CityModel.getAllCities()
  console.log(citiesArray)
  this.setState({
    cities:citiesArray
  })
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
          city:''
        })
        this.props.history.push('/login')
      })
      .catch(err => console.log(err))
  }

  render() {
    const options = [ //hardcode city, will be change
  { label: 'SanF', value: 'SF' },
  { label: 'losA', value: 'LA' },
  { label: 'Others', value: 'Other' },
];
  console.log(this.state.cities)

    return (
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
                <label htmlFor="name">Profile_name</label>
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
                <Select value={this.state.city} onChange={this.handleSelectChange}  options={options} placeholder= 'city'/>
              </div>
              <button className="btn btn-primary float-right" type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

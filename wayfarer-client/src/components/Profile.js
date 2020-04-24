import React from 'react';
import UserModel from '../models/user'
import CityModel from '../models/city'
import Select from "react-virtualized-select";
import { Link, NavLink } from 'react-router-dom';

export default class Profile extends React.Component {
	

	constructor(props) {
		super(props);
		this.state = {
    // store the default values for the fields in the register form
		    id:this.props.currentUser,
		    username: '',
		    profile_name:'',
		    city:'',
		    currentCity:'',
		    cities:[],
		    readonly:true
  }
  	UserModel.getUserInfo(this.props.currentUser)
  		.then(res=>{
  			console.log(res.data)
  			this.setState({
  				username:res.data[1].username,
  				profile_name:res.data[1].profile_name,
  				city:res.data[1].city,
  				currentCity:{label:res.data[0].name,value:res.data[0]._id}
  			})
  		})
  		.catch(err=>{
  			console.log(err)
  		})
	CityModel.getAllCities()
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


handleSubmit = (event) => {
    console.log("submit");
    event.preventDefault()
    UserModel.update(this.state)
    	.then(res=>{
    		this.props.history.push('/profile')
    	})
    	.catch(err=>console.log(err))
  }

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

  handleEdit=(event)=>{
  	console.log("edit")
  	this.setState({
  	readonly:false
  	})
  }





	render() {
			const Button = () => (
				<button className="btn btn-primary float-right" type="submit">update</button>
				)

			const EditButton=()=>(
				<button onClick={this.handleEdit}>
				  edit
				</button>
				)
			const CitySelect=()=>(
				<Select value={this.state.city} onChange={this.handleSelectChange}  options={this.state.cities} focusedOption={this.state.currentCity}  placeholder= 'city' />
				)

		return (
			<div>


	<div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h4 className="mb-3">profile</h4>
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
                    readOnly={this.state.readonly}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">You name</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="profile_name" name="profile_name" value={this.state.profile_name} readOnly={this.state.readonly} />
              </div>
              <div className="form-group">
              	{this.state.readonly?<label>{this.state.currentCity.label}</label>:<CitySelect />}

              </div>
             {this.state.readonly?null:<Button />}
             {this.state.readonly?<EditButton />:null}

            </form>
          </div>
        </div>
      </div>
      </div>
		);
	}
}

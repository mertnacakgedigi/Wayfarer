import React from 'react';
import UserModel from '../models/user'
import { Link, NavLink } from 'react-router-dom';

export default class Profile extends React.Component {
	

	constructor(props) {
		super(props);
		this.state = {
    // store the default values for the fields in the register form
		    id:this.props.currentUser,
		    username: 'test',
		    password: '',
		    profile_name:'',
		    city:'LA',
		    readonly:true
  }
	}


handleSubmit = (event) => {
    console.log("submit");
  }

  handleChange = (event) => {
    // console.log(event)
    // set state with the value from the input
    this.setState({
        [event.target.name]: event.target.value
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


		return (
			<div>
			<p>
			{this.props.currentUser}
			</p>

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
                <label htmlFor="name">Profile_name</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="profile_name" name="profile_name" value={this.state.profile_name} readOnly={this.state.readonly} />
              </div>
              <div className="form-group">
{/*                <label htmlFor="name">City</label>
               <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="city" name="city" value={this.state.city} />*/}
{/*                  <select value={this.state.city}  onChange={this.handleSelectChange}>
                  {options.map(e=>(
                      <option value={e.value}>{e.lable}</option>
                    ))}
            </select>*/}
                {/*<Select value={this.state.city} onChange={this.handleSelectChange}  options={options} placeholder= 'city'/>*/}
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

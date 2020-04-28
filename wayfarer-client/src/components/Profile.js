import React from 'react';
import UserModel from '../models/user'
import CityModel from '../models/city'
import PostModel from '../models/post'
import Select from "react-virtualized-select";
//import Show from './Show'
import { Modal } from 'react-bootstrap';
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
        date:'',
		    cities:[],
        posts:[],
        select:'',
		    readonly:true,
        show:false
  }
  	UserModel.getUserInfo(this.props.currentUser)
  		.then(res=>{
  			this.setState({
  				username:res.data[1].username,
  				profile_name:res.data[1].profile_name,
  				city:res.data[1].city,
          date:res.data[1].createdAt,
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


    PostModel.getPostById(this.props.currentUser)
      .then(res=>{
        console.log("post -------------------------")
        console.log(res.data)
        // let postArray=res.data.map(post=>(
        //     post.title
        //   ))
        this.setState({
          //posts:postArray
          posts:res.data
        })
      })
      .catch(err=>console.log(err))



	}


handleSubmit = (event) => {
    event.preventDefault()
    UserModel.update(this.state)
    	.then(res=>{
    		window.location.reload(false);
    	})
    	.catch(err=>console.log(err))
        event.preventDefault()
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

  handleClick=(event)=>{
    console.log(event.target.id)
    event.preventDefault()

    console.log("here ----------------")
    this.setState({
      select:event.target.id,
      show:true
    })
    return(<h1>inside click</h1>)

  }

  handleClose=()=>{
  this.setState({
    show:false
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
      const Show=(props)=>(
        <Modal show={this.state.show} onHide={this.handleClose}>
      <h2>{props.title}</h2>
    
      <div>{props.content}</div>
      {/*<h1>Test Modal</h1>*/}
     

    </Modal>
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
              <div>
              <label>Join at:</label>
                <label>{new Date(this.state.date).getMonth()+1}-{new Date(this.state.date).getDate()}-{new Date(this.state.date).getFullYear()}</label>
              </div>
              <div className="form-group">
              	{this.state.readonly?<label>{this.state.currentCity.label}</label>:<CitySelect />}

              </div>
             {this.state.readonly?null:<Button />}
             {this.state.readonly?<EditButton />:null}

            </form>
            <div>
              {this.state.posts.map((post)=>(
                <>
                <a id={post._id} href="#" onClick={this.handleClick}>{post.title}<br/></a>
                {this.state.select==post._id?<Show title={post.title} content={post.content}/>:null}
               
                </>
              )) }
            </div>

          </div>
        </div>
      </div>
      
      </div>
		);
	}
}

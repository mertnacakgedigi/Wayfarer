import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import CityModel from '../models/city';

export default class Cities extends React.Component {


	constructor(props) {
		super(props);
		this.state={
			cities:[],
			selectCity:'',
			showNew:false
		}
	CityModel.getAllCities()
    .then(res=>{
      // let citiesArray=res.data.map(city=>(
      //       {label:city.name,value:city._id}
      //   ))

        this.setState({
          cities:res.data
        })
      })
    .catch(err=>console.log(err))


	}

	handleClick=(city)=>{
		console.log(city)
		this.setState({
			selectCity:city
		})
	}

	handleAddClose=()=>{
  this.setState({
    showNew:false
  })
}

handleAddButton=()=>{
	this.setState({
		showNew:true
	})
}

handleAddPostSubmit=()=>{

	
}


	render() {
		const CityDetail=()=>(
	
			<div class="container">
					  <div className="row gamerow" id="#">
					    <div class="col-sm">
					      <img src={this.state.selectCity.image} class="img-thumbnail" alt={this.state.selectCity.name} />
					    </div>
					    <div class="col-sm">
					     <h2>{this.state.selectCity.name}</h2>
					     
					    </div>
					    <div class="col-sm">
					      Has {this.state.selectCity.posts.length} {this.state.selectCity.posts.length === 1 ? ' review' : ' reviews'} 
					    </div>
					    
					{/*will loop all the posts here*/}
					  </div>
					  <button onClick={this.handleAddButton}>
							  add post
							</button>
					  
					</div>

		)

		const AddPost=()=>(
			<Modal show={this.state.showNew} onHide={this.handleAddClose}>
				<form id="newPost" className="row" onSubmit={this.handleAddPostSubmit}>
		        <div className="col-md-6 offset-md-3">
		          <h4 className="mb-4">New review</h4>
		          <div className="form-group">
		            <label for="title">Title</label>
		            <input id="title" type="text" name="title" className="form-control form-control-lg" />
		          </div>
		          <div className="form-group">
		            <label for="content">Content</label>
		            <textarea id="content" name="content" className="form-control form-control-lg" rows="10"></textarea>
		          </div>
		          <button type="submit" className="btn btn-primary float-right">Add New post</button>
		        </div>
		      </form>


			</Modal>


			)


		return (
			<div className="row no-gutters">
			<div className="col">
			{this.state.cities.map((city)=>(
				
					<div className="container">
					  <div className="row gamerow" id="#">

					    <div className="col-sm">
					     <h2> <a className="nav-link" id={city._id} href="#" onClick={()=>{this.handleClick(city)}}>{city.name}</a></h2>
					     
					    </div>
					{/*    <div class="col-sm">
					      Has {city.posts.length} {city.posts.length === 1 ? ' review' : ' reviews'} 
					    </div>*/}
					  </div>
					  
					</div>
				

				))}
			</div>
				<div className="col">
			  {this.state.selectCity?<CityDetail />:null}
			    </div>
			    <AddPost />
			</div>
		);
	}
}

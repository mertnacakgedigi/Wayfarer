import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import AddPost from './AddPost';
import EditPost from './EditPost';

import CityModel from '../models/city';
import PostModel from '../models/post';
import './cities.css'

const TestOutPut=()=>(
	<h1>Test output</h1>
	)

export default class Cities extends React.Component {


	constructor(props) {
		super(props);
		this.state={
			cities:[],
			selectCity:'',
			selectPost:'',
			post_title:'',
			post_content:'',
			showNew:false,
			showEdit:false
		}
	CityModel.getAllCities()
    .then(res=>{

        this.setState({
          cities:res.data
        })
      })
    .catch(err=>console.log(err))


	}

	handleClick=(city)=>{
		console.log(city.posts)
		city.posts.sort((a,b)=>(a.updatedAt>b.updatedAt)?-1:1)
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
		showNew:true,
		
	})
}

handleChange = (event) => {
    // console.log(event)
    // set state with the value from the input

    this.setState({
        [event.target.name]: event.target.value
    })
    event.preventDefault()
  }





handleAddPostSubmit=(event)=>{
	 event.preventDefault()
	 let data={
	 	cityId:this.state.selectCity._id,
	 	title:this.state.post_title,
	 	content:this.state.post_content,
	 	user:this.props.currentUser
	 }
	 PostModel.addPost(data)
	 	.then(res=>{
	 		window.location.reload(false);
	 	})
	 	.catch(err=>console.log(err))

}

handleEditClick=(post)=>{
	//console.log("handleEditClick")

	this.setState({
		selectPost:post,
		post_title:post.title,
		post_content:post.content,
		showEdit:true
	})
}
handleEditClose=()=>{
	this.setState({
		showEdit:false
	})
}

handleEditSubmit=(event)=>{
	event.preventDefault()
	let data={
		cityId:this.state.selectCity._id,
		postId:this.state.selectPost._id,
	 	title:this.state.post_title,
	 	content:this.state.post_content,
	 	user:this.props.currentUser
	}
	PostModel.updatePost(data)
		.then(res=>{
			window.location.reload(false);
		})
		.catch(err=>console.log(err))
}

handleDelete=(post)=>{
	let data={
		cityId:this.state.selectCity._id,
		postId:post._id
	}
	PostModel.deletePost(data)
		.then(res=>{
			window.location.reload(false);
		})
		.catch(err=>console.log(err))
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
					      Has {this.state.selectCity.posts.length} {this.state.selectCity.posts.length === 1 ? ' post' : ' posts'} 
					    </div>
					    
					 </div>
					  	<br></br>
						<br></br>
						
					  <button className = "mybtn" onClick={this.handleAddButton}>
							  add post
							</button>
							<br></br>
							<br></br>
							

												{/*will loop all the posts here*/}
					<div>
						{this.state.selectCity.posts.map((post)=>(
								<div class="container" >
									<div class="row">
										<div class="col-6 col-md-4" id={post.user}>
											<h5>username</h5>
										
										</div>
										<div class="col-12 col-md-8" id={post._id}>
											<article >
											<h5>{post.title}</h5>
											<p>
											{post.content}
											</p>
											{post.user===this.props.currentUser?
											<div>
											<button id="editBtn" class="btn btn-sm btn-info info-review float-right mr-2" type="button" onClick={()=>{this.handleEditClick(post)}}>Edit post</button>
						          			<button id="deleteBtn" class="btn btn-sm btn-danger delete-review float-right mr-2" type="button" onClick={()=>{if (window.confirm('Are you sure you wish to delete this post?')) this.handleDelete(post)}}>Delete post</button>
											</div>
											:null
											}
											</article>
											<br></br>
											
										</div>
									</div>
									<br></br>

								</div>

							))}

					</div>
					  
					</div>

		)

		// const AddPost=()=>(
		// 	<Modal show={this.state.showNew} onHide={this.handleAddClose}>
		// 		<form id="newPost" className="row" onSubmit={this.handleAddPostSubmit}>
		//         <div className="col-md-6 offset-md-3">
		//           <h4 className="mb-4">New review</h4>
		//           <div className="form-group">
		//             <label for="title">Title</label>
		//             <input id="title" type="text" name="post_title" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.post_title} />
		//           </div>
		//           <div className="form-group">
		//             <label for="content">Content</label>
		//             <textarea id="content" name="post_content" className="form-control form-control-lg" rows="10" onChange={this.handleChange} value={this.state.post_content}></textarea>
		//           </div>
		//           <button type="submit" className="btn btn-primary float-right">Add New post</button>
		//         </div>
		//       </form>


		// 	</Modal>


		// 	)

		// const EditPost=()=>(
		// 	<Modal show={this.state.showEdit} onHide={this.handleEditClose}>
		// 		<form id="editPost" className="row" onSubmit={this.handleEditSubmit}>
		//         <div className="col-md-6 offset-md-3">
		//           <h4 className="mb-4">Edit Post</h4>
		//           <div className="form-group">
		//             <label for="title">Title</label>
		//             <input id="edit_title" type="text" name="post_title" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.post_title} />
		//           </div>
		//           <div className="form-group">
		//             <label for="content">Content</label>
		//             <textarea id="edit_content" name="post_content" className="form-control form-control-lg" rows="10" onChange={this.handleChange} value={this.state.post_content}></textarea>
		//           </div>
		//           <button type="submit" className="btn btn-primary float-right">Edit post</button>
		//         </div>
		//       </form>


		// 	</Modal>

		// 	)


		return (
			<div className="row no-gutters">
			<div className="col">
			{this.state.cities.map((city)=>(
				
					<div className="container">
					  <div className="row gamerow" id="#">

					    <div className="col-sm">
					     <h2> <a className="nav-link" id={city._id} href="#" onClick={()=>{ this.handleClick(city)}}>{city.name}</a></h2>
					     
					    </div>
					  </div>
					  
					</div>
				

				))}
			</div>
			<br></br>

			
			
				<div className="col">
			  {this.state.selectCity?<CityDetail />:null}
			    </div>
			   <AddPost showNew={this.state.showNew} handleAddClose={this.handleAddClose} handleAddPostSubmit={this.handleAddPostSubmit} handleChange={this.handleChange} post_title={this.state.post_title} post_content={this.state.post_content} />
			   <br></br>
			   <br></br>
				<EditPost showEdit={this.state.showEdit} handleEditClose={this.handleEditClose} handleEditSubmit={this.handleEditSubmit} handleChange={this.handleChange} post_title={this.state.post_title} post_content={this.state.post_content}/>
			</div>
		);
	}
}

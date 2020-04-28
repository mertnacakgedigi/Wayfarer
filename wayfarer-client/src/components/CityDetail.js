import React, { Component } from 'react';

const CityDetail=(props)=>(
	
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
					  <button onClick={this.handleAddButton}>
							  add post
							</button>

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
											
										</div>
									</div>

								</div>

							))}

					</div>
					  
					</div>

		)

export default CityDetail;
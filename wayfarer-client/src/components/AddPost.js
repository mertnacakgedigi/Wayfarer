import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

	const AddPost=(props)=>(
			<Modal show={props.showNew} onHide={props.handleAddClose}>
				<form id="newPost" className="row" onSubmit={props.handleAddPostSubmit}>
		        <div className="col-md-6 offset-md-3">
		          <h4 className="mb-4">New review</h4>
		          <div className="form-group">
		            <label for="title">Title</label>
		            <input id="title" type="text" name="post_title" className="form-control form-control-lg" onChange={props.handleChange} maxlength="10" />
		          </div>
		          <div className="form-group">
		            <label for="content">Content</label>
		            <textarea id="content" name="post_content" className="form-control form-control-lg" rows="10" onChange={props.handleChange} ></textarea>
		          </div>
		          <button type="submit" className="btn btn-primary float-right">Add New post</button>
		        </div>
		      </form>


			</Modal>


			)

export default AddPost;
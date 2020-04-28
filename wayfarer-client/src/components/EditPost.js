import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

const EditPost=(props)=>(
			<Modal show={props.showEdit} onHide={props.handleEditClose}>
				<form id="editPost" className="row" onSubmit={props.handleEditSubmit}>
		        <div className="col-md-6 offset-md-3">
		          <h4 className="mb-4">Edit Post</h4>
		          <div className="form-group">
		            <label for="title">Title</label>
		            <input id="edit_title" type="text" name="post_title" className="form-control form-control-lg" onChange={props.handleChange} value={props.post_title} />
		          </div>
		          <div className="form-group">
		            <label for="content">Content</label>
		            <textarea id="edit_content" name="post_content" className="form-control form-control-lg" rows="10" onChange={props.handleChange} value={props.post_content}></textarea>
		          </div>
		          <button type="submit" className="btn btn-primary float-right">Edit post</button>
		        </div>
		      </form>


			</Modal>

			)
export default EditPost;
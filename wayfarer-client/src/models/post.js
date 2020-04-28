import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"

export default class PostModel {
	static getPostById(data) {
		let request = axios.get(`${REACT_APP_API_URL}/profile/${data}/posts`, data)
    return request
		}

	static addPost(data){
		let request=axios.post(`${REACT_APP_API_URL}/cities/${data.cityId}/posts`,data)
		return request
	}
	static updatePost(data){
		let request=axios.put(`${REACT_APP_API_URL}/cities/${data.cityId}/posts/${data.postId}`,data)
		return request
	}
	static deletePost(data){
		let request=axios.delete(`${REACT_APP_API_URL}/cities/${data.cityId}/posts/${data.postId}`,data)
		return request
	}

	}
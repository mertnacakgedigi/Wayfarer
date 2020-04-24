import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"

export default class PostModel {
	static getPostById(data) {
		let request = axios.get(`${REACT_APP_API_URL}/profile/${data}/posts`, data)
    return request
		}

	}
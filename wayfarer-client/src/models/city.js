import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"

export default class UserModel {
	static getAllCities(){
    let request = axios.get(`${REACT_APP_API_URL}/cities`)
    return request
  }
	

}




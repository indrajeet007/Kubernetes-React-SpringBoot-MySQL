import axios from 'axios'

// export const BACKEND_API_URL = 'http://192.168.64.10:31019'

export const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL

const headers_product = {
    headers: { 
        'Access-Control-Allow-Origin': 'http://172.17.0.2:31846',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
    }
}

const headers_envs = {
    headers: { 
        'Access-Control-Allow-Origin': 'http://172.17.0.2:31846',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
    }    
}

class CourseDataService {

    retrieveRequiredEnvs() {
        return axios.get(`${BACKEND_API_URL}/listenvs`, headers_envs);
    }

    retrieveAllCourses() {
        //console.log('executed service')
        return axios.get(`${BACKEND_API_URL}/api/v1/products`, headers_product);
    }

    retrieveCourse(id) {
        //console.log('executed service')
        return axios.get(`${BACKEND_API_URL}/api/v1/products/${id}`, headers_product);
    }

    deleteCourse(id) {
        //console.log('executed service')
        return axios.delete(`${BACKEND_API_URL}/api/v1/products/${id}`, headers_product);
    }

    updateCourse(id, product) {
        //console.log('executed service')
        return axios.put(`${BACKEND_API_URL}/api/v1/products/${id}`, product, headers_product);
    }

    createCourse(product) {
        //console.log('executed service')
        console.log(product)
        return axios.post(`${BACKEND_API_URL}/api/v1/products/`, product, headers_product);
    }
}

export default new CourseDataService()
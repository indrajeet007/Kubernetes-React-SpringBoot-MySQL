import axios from 'axios'

// const BACKEND_API_URL = `minikube ip`

export const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL || 'http://192.168.64.10:31019'

class CourseDataService {

    retrieveRequiredEnvs() {
        return axios.get(`${BACKEND_API_URL}/listenvs`)
    }

    retrieveAllCourses() {
        //console.log('executed service')
        return axios.get(`${BACKEND_API_URL}/api/v1/products`);
    }

    retrieveCourse(id) {
        //console.log('executed service')
        return axios.get(`${BACKEND_API_URL}/api/v1/products/${id}`);
    }

    deleteCourse(id) {
        //console.log('executed service')
        return axios.delete(`${BACKEND_API_URL}/api/v1/products/${id}`);
    }

    updateCourse(id, course) {
        //console.log('executed service')
        return axios.put(`${BACKEND_API_URL}/api/v1/products/${id}`, course);
    }

    createCourse(course) {
        //console.log('executed service')
        return axios.post(`${BACKEND_API_URL}/api/v1/products/`, course);
    }
}

export default new CourseDataService()
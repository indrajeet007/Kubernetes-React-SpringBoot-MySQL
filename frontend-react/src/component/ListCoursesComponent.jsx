import React, { Component } from 'react'
import CourseDataService, { BACKEND_API_URL } from '../service/CourseDataService';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ListCoursesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            envs: [],
            mappedBackEnd: [],
            message: null
        }
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)
        this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
        this.refreshEnvVars = this.refreshEnvVars.bind(this)
    }

    componentDidMount() {
        this.refreshCourses()
        this.refreshEnvVars()
    }

    refreshCourses() {
        var self = this;
        CourseDataService.retrieveAllCourses()
            .then(function(response) {
                    self.setState({ products: response.data })       
                }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

    refreshEnvVars() {
        var self = this;

        CourseDataService.retrieveRequiredEnvs()
            .then(
                response => {
                    self.setState({ envs: response.data })

                    const idEnv = Object.entries(this.state.envs[0]).map(env => {
                        // return [counter++, env[0], env[1]]
                        return [env[0], env[1]]
                    })
                    console.log(this.state.envs[0].HOSTNAME)
                    console.log(idEnv)

                    self.setState({ mappedBackEnd: idEnv })
                }
            )
    }

    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )
    }

    addCourseClicked() {
        this.props.history.push(`/products/-1`)
    }

    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/products/${id}`)
    }

    

    render() {
        console.log('render')
        return (
            <div className="container">
                <h4 align="center" style={{ paddingBottom: 30 }}>Service Container: {this.state.envs.map(el => el.HOSTNAME)}</h4>
                <h3 align="center">Start Listing</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div>
                    <div className="filters">
                        <div className="form-group">
                            <input placeholder="Search" v-model="searchKey" className="form-control" id="search-element" required/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success" onClick={this.addCourseClicked}>Add Product</button>
                        </div>
                    </div>
                    <div className="table hover striped">
                        <table className="table">
                            <thead align="center">
                                <tr align="center">
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody align="center">
                                {
                                    this.state.products.map(
                                        product =>
                                            <tr align="center" key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.description}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <button className="btn btn-success" onClick={() => this.updateCourseClicked(product.id)}>Update</button>
                                                    <button style={{ marginLeft: 20 }} className="btn btn-warning" onClick={() => this.deleteCourseClicked(product.id)}>Delete</button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="col-md-12 row" style={{ alignContent: 'center' }}>
                    <div className="container" style={{ paddingBottom: 40 }}>
                        <h4 align="center">Environment Variables (Frontend)</h4>
                        <TableContainer component={Paper}>
                            <Table aria-label="envfrontend" size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ textAlign: 'center' }}>ENV_KEY</TableCell>
                                        <TableCell style={{ textAlign: 'center' }}>VALUE</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={{ textAlign: 'center' }}>BACKEND_API_URL</TableCell>
                                        <TableCell style={{ textAlign: 'center' }}>{BACKEND_API_URL}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className="container">
                        <h4 align="center">Environment Variables (Backend)</h4>
                        <TableContainer component={Paper}>
                            <Table aria-label="envbackend" size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ textAlign: 'center' }}>ENV_KEY</TableCell>
                                        <TableCell style={{ textAlign: 'center' }}>VALUE</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                    this.state.mappedBackEnd.map((mappedEnv) => (
                                        <TableRow key={mappedEnv[0]}>
                                            <TableCell style={{ textAlign: 'center' }}>{mappedEnv[0]}</TableCell>
                                            <TableCell style={{ textAlign: 'center' }}>{mappedEnv[1]}</TableCell>
                                        </TableRow>
                                    ))
                                }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent
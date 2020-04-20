import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../service/CourseDataService';

class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',
            price: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                description: response.data.description,
                price: response.data.price
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        return errors

    }

    onSubmit(values) {
        let product = {
            id: this.state.id,
            name: values.name,
            description: values.description,
            price: values.price,
            targetDate: values.targetDate
        }

        console.log("Product: ", product)

        if (this.state.id === -1) {
            CourseDataService.createCourse(product)
                .then(() => this.props.history.push('/products'))
        } else {
            CourseDataService.updateCourse(this.state.id, product)
                .then(() => this.props.history.push('/products'))
        }

        console.log(values);
    }

    render() {

        let { description, id } = this.state

        return (
            <div>
                <h3>Course</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, description }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Price</label>
                                        <Field className="form-control" type="text" name="price" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                    <button type="submit" className="btn btn-primary">Create</button>
                                    <button type="submit" className="btn btn-danger" onClick={() => this.props.history.push('/')}>Cancel</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default CourseComponent
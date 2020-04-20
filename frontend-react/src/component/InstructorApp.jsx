import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseComponent from './CourseComponent';

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <div style={{ backgroundColor: "#fec80b" }}>
                        <center>
                        <img style={{ width: 250, height: 100 }} src="https://businesstraffic.com.ng/wp-content/uploads/2019/11/Western-Union.png" alt="company-logo"></img>
                        </center>
                        <h1 align="center">To-Do Application New Change</h1>
                        
                        <Switch>
                            <Route path="/" exact component={ListCoursesComponent} />
                            <Route path="/products" exact component={ListCoursesComponent} />
                            <Route path="/products/:id" component={CourseComponent} />
                        </Switch>
                    </div>
                </>
            </Router>
        )
    }
}

export default InstructorApp

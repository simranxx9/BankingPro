import React from 'react';
import moment from 'moment';
import { Component } from 'react';
import {Link }  from 'react-router-dom';

class ProjectSummary extends Component{
    state={
        total:0
    }
    render(){
        const {project,balance} = this.props;
        this.state.total = Number(project.title)+balance;
    // console.log(this.state.total);
    if(balance)
    {
        return(
            <div>
                <div className="card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">₹{project.title}</span>
                        <p>Loan Taken by You</p>
                        <p>Purpose : {project.content}</p>
                        <p>New Balance : ₹{this.state.total}</p>
                        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                    </div>
                </div>
            </div>
    )
    }
    else{
        return(
            <div>
                <div className="card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">₹{project.title}</span>
                        <p>Loan Taken by {project.authorFirstName}</p>
                        <p>Purpose : {project.content}</p>
                        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                    </div>
                </div>
            </div>
    )
    }

    }
    
}
export default ProjectSummary;
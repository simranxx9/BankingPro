import React from 'react';
//as we dont have data from firestore here so we need to import that
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props)=>{
    const project =props.project;
    const {auth} = props
    if(!auth.uid)
    {   return <Redirect to="/signup" />
    }
    if(project){
        return(
        <div className="container section project-summary">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Loan Sanctioned ₹{project.title}</span>
                <p>Loan Purpose : {project.content}
                 </p>
                 <p>UPI : {project.authorFirstName+'@yb1'}</p>
                <div>To {project.authorFirstName}</div>
                <p>Branch : {project.authorLastName}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                {/* <div>Posted by {project.authorFirstName} {project.authorLastName}</div> */}
                <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
        </div>
    </div>
        )}
    else{
    return(
       <div className="container">
            <p>Loading...</p>
       </div>
    )
    }
}
const mapStateToProps=(state,ownProps)=>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects
    const project=projects?projects[id]:null
    return{
        project:project,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(ProjectDetails);

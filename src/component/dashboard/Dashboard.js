import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
// compose is used to two higher order components
import { compose } from 'redux';
import {Redirect } from 'react-router-dom';
import ProjectSummary from '../projects/ProjectSummary';
import UserSummary from '../projects/UserSummary';

class Dashboard extends Component{
    state={
        balance:1500,pro:''
    }
    render(){
        // console.log(this.props);
        const id = this.props.auth.uid;
        // console.log(id);
        const {projects,auth,notifications}=this.props
        if(!auth.uid)
        {   return <Redirect to="/signup" />
        }
        if(id == "gWLPt1Zd8fhbGmvwubgCYD2Qm5Y2")
        {
            return(
                <div className="dashboard container">
                    <div className="row">
                        <div className="col m6 s12">
                            <h3>Admin</h3>
                        <ProjectList projects={projects}/>
                            
                            {/* <h2>Balance</h2>
                            <h1>₹{this.state.balance}</h1> */}
                        </div> 
                        <div className="col s12 m5 offset-m1">
                        {/* <Notifications notifications={notifications}/> */}
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="dashboard container">
                    <div className="row">
                        <div className="col m6 s12">
                            <h4>Initial Balance : ₹{this.state.balance}</h4>
                             <h3>Transactions</h3>
                        { projects && projects.map((project)=>{             //asame as if we ahave atleast 1 project
                            
                            if(project.authorId == id){
                                // console.log(project.authorFirstName);
                                this.state.pro = project;
                                
                                return(
                                // <Link to={'/project/'+project.id} key={project.id}>
                                <div>
                                    <ProjectSummary project={project} balance={this.state.balance}/>
                                    {/* <h2>Balance</h2>
                                    <h1>₹{this.state.balance}</h1> */}
                                </div>
                                // </Link>
                            )}
                        })}
                            
                        </div> 
                        <div className="col s12 m5 offset-m1">
                        {/* <Notifications notifications={notifications}/> */}
                        <UserSummary project = {this.state.pro}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
const mapStateToProps = (state) =>{

    return{
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth,
        notifications:state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects',orderBy:['createdAt','desc'] },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        { collection:'notifications',limit:3 , orderBy:['time','desc']}       //gonna take array and connect to the collection
    ])
)(Dashboard);
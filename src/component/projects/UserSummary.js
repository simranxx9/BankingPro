import React from 'react';
import moment from 'moment';

const UserSummary = (props)=>{
    const {project} = props;
    console.log(props);
    if(project)
    {
        return(
        
            <div>
                <div className="card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">User Details</span>
                        <span>Welcome To SIRAMA BANK !</span>
                         <p><h5>{project.authorFirstName}</h5></p>
                         <p>Branch Name : {project.authorLastName}</p>
                         <p>UPI : {project.authorFirstName+'@yb1'}</p>
                         {/* <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p> */}
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
                    
                        <p className="grey-text">Login Time : {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                </div>
            </div>
    )
    }
}
export default UserSummary;
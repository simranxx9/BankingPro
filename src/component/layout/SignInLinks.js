import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import signOut from '../../store/actions/SignOut'
 
const SignInLinks = (props) => {
    const {auth} = props;
    if(auth.uid == "gWLPt1Zd8fhbGmvwubgCYD2Qm5Y2")
    {
        return(
            <ul className="right">
                <li><NavLink to="/about">About</NavLink></li>
                <li><a onClick={props.signOut}>Log out</a></li>
                <li><NavLink to="/" className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink></li>
            </ul>
         )
    }
    else{
        return(
            <ul className="right">
                <li><NavLink to="/create">Loan</NavLink></li>
                <li><a onClick={props.signOut}>Log out</a></li>
                <li><NavLink to="/" className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink></li>
            </ul>
         )
    }
    
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignInLinks);
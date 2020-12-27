import React, { Component } from 'react';
import { connect } from 'react-redux';
import createProject from '../../store/actions/ProjectActions';
import {Redirect } from 'react-router-dom';

class CreateProject extends Component {
    state={
        title:100,
        content:'',
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value,
            // total:this.state.total+this.state.title
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    render() {
        const {auth} = this.props
        if(!auth.uid)
        {   return <Redirect to="/signup" />
        }
        return (
            <div className="container">
                <form className="white create" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Take Loan</h5>
                    <div className="input-field">
                        <label htmlFor="title">Amount</label>
                        <input type="number" id="title" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Loan Purpose</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        createProject:(project)=>dispatch(createProject(project))
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);

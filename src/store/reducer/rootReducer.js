import authReducer from './authReducer';
import projectReducer from './projectReducer';

import {combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import {firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth:authReducer,   // coresponding to auth reducers
    project:projectReducer,
    firestore:firestoreReducer ,             //applying firebase to the state ppty ,
    firebase:firebaseReducer                // to keep track of authentication
});

export default rootReducer;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/App';
import * as serviceWorker from './src/serviceWorker';
import { createStore,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/store/reducer/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from './src/config/fbConfig';
// import firebase from 'firebase/app';
// import { createFirestoreInstance } from 'redux-firestore';

const store = createStore(
  rootReducer,
  compose(
   applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
   reduxFirestore(fbConfig),
   reactReduxFirebase(fbConfig,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady:true})
 )
);

//useFirestoreForProfile:true is used to sync the profile from firestore to get initials(enhancer)

store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(
    <Provider store={store}>
      
        <App />     
      
    </Provider>,
    document.getElementById('root')
  );
  serviceWorker.unregister();
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


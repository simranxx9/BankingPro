
// to make asynchronous call we use action creator

export const signIn = (credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();  //getFirebase is to comminicate with project in firebase

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch(err=>{
            dispatch({type:'LOGIN_ERROR',err})
        })
    }
}



export const signOut = ()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'})
        })
    }
}

export default signOut;
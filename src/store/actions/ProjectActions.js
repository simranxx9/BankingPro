export const createProject=(project)=>{
    return(dispatch,getState,{ getFirebase, getFirestore })=>{          //using halts mechanism
        
        console.log(getState());
        const profile = getState().firebase.profile
        const userId = getState().firebase.auth.uid
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,                       // spread operator for project.content and project.title
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId:userId,
            createdAt:new Date()
        }).then(()=>{                               //to fire only when the data is added
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{                  //if we get any error or project not added
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        })
        
    }
};

export default createProject;
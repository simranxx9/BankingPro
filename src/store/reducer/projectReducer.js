const initState={
    projects:[
        {id:1,title:'from east to west'},
        {id:2,title:'from east to west'},
        {id:3,title:'from east to west'}
    ]
}
const projectReducer = (state=initState,action) =>{
    
   switch(action.type){
       case 'CREATE_PROJECT':
           console.log('created project',action.project);
           return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error',action.err);
            return state;
        default:
            return state;
            
   }
}

export default projectReducer;
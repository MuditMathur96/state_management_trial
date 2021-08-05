const InitialState ={
     isAuthenticated :false,
     user:null,
     data:null,
     counter:0
};



const reducer = (state=InitialState,action)=>{
     switch(action.type){
          case 'login':
               return {...state,isAuthenticated:true,user:{usernam:"some name"}}
               break;
          case "logout":
               return {...state,isAuthenticated:false,user:null}
          case "increment":
               return {...state,counter:state.counter+1}
               break;
          case "decrement":
               return {...state,counter:state.counter-1}
               break;
          default:
               return state;
          
     }
}

export default reducer;
 export const InitialState ={
     isAuthenticated :false,
     user:null,
     data:null,
     counter:0,
     cart:[
          {
               id:0,
               name:"First Product",
               quantity:1,
               priceOfOne:400
          },
          {
               id:1,
               name:"Secnod Product",
               quantity:1,
               priceOfOne:500
          },
          {
               id:2,
               name:"First Product",
               quantity:1,
               priceOfOne:100
          },
          {
               id:3,
               name:"First Product",
               quantity:1,
               priceOfOne:600
          }
     ]
};



const reducer = (state=InitialState,action)=>{
     switch(action.type){
          case 'login':
               return {...state,isAuthenticated:true,user:{usernam:"some name"}}
               break;
          case "logout":
               return {...state,isAuthenticated:false,user:null,counter:0}
          case "increment":
               return {...state,counter:state.counter+1}
               break;
          case "decrement":
               return {...state,counter:state.counter-1}
               break;
          case "addToCart":
               {
                    console.log("Added to cart");
                    var newItem = action.payload;
                    var existItem = state.cart.find((item)=>item.id===newItem.id);
                   var cartItems = existItem?state.cart.map((item)=>item.id===existItem.id?newItem:item)
                    :[...state.cart,newItem];


                   console.log("new State: ",{...state,cart:cartItems});
                    return {...state,cart:cartItems};
                    
               };
               break;

               case "removeFromCart":{
                    console.log("remove From Cart",action.payload);
                    var newItem = action.payload;
                    var  existItem = state.cart.find(item=>item.id===newItem.id);
                    if(existItem && newItem.quantity>0)
                    {
                         var cartItems = state.cart.map((item)=>
                              item.id ===newItem.id?newItem:item
                         );
                    }
                    else{
                         var cartItems = state.cart.filter((item)=>item.id!==newItem.id);

                    }
                    console.log("new cart",{...state,cart:cartItems})
                    return {...state,cart:cartItems};
               }
               break;
               
          default:
               return state;
          
     }
}

export default reducer;

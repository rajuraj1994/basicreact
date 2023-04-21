const initialData={
    cartcount:0
}

const cartReducer=(state=initialData,action)=>{
    // state store the initial value 
    // action is a function which perform operations

    switch(action.type){
        case 'ADD_TO_CART':
            return{
                cartcount:++state.cartcount
            }
        case 'REMOVE_FROM_CART':
            return{
                cartcount:--state.cartcount
            }
        default:
            return state
    }
}

export default cartReducer

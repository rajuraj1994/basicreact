import { combineReducers,createStore } from "redux";
import cartReducer from "./redux/reducers/cartReducer";
import studentReducer from "./redux/reducers/studentReducer";


const reducer=combineReducers({
    cart:cartReducer,
    student:studentReducer
})

const store=createStore(reducer)

export default store 

const initialData={
    student_name:'Bisesh'
}

const studentReducer=(state=initialData,action)=>{
    switch(action.type){

        case "CHANGE_NAME":
            return{
                ...state,
                student_name:action.payload
            }

        default:
            return state

    }
}

export default studentReducer
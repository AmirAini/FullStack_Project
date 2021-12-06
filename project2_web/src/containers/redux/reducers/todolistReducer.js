const initialState = [{
    task:'',
    description:'',
    cateogry:'',
    date:'',
}]

const todolistReducer = (state=initialState,action) => {
    switch(action.type){
        case 'getTodolist_Success':
            
            let arr=[{

            }]
            for (let i=0; i<action.payload; i++){
                return [{ ...state,
                    task: action.payload[i].task,
                    description: action.payload[i].description,
                    category: action.payload[i].category,
                    date: action.payload[i].created_at,
                },
            ]
            }
        default:
            return state;
    }
}

export default todolistReducer;

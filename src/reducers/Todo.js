import {
  DELETE_TODO
} from '../actions/Todo'
const initialState={}
export default function todo (state = initialState, action) {
	 switch(action.type){
        case DELETE_POST://deleted=true
            let todo=[]
            state.forEach(t => {
                if(t.id!==action.id){
                    todo.push(t)
                }
            });
            return todo;
        default:
            return state;
    }
}
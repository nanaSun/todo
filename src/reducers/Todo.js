import {
 TOGGLE_TODO,
 GET_TODOS
} from '../actions/Todo'
const initialState={}
export default function todo (state = initialState, action) {
	 switch(action.type){
        case GET_TODOS:
            return {todos:[...action.items]}
        case TOGGLE_TODO://deleted=true
            return {
                todos:action.items.map((i)=>{
                    if(i.id===action.id){
                        return {
                            ...i,
                            status:i.status===0?1:0
                        }
                    }else{
                        return {
                            ...i
                        } 
                    }
                })
            }
        default:
            return state;
    }
}
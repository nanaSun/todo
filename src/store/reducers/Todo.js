const {TOGGLE_TODO,GET_TODOS}=require('../actions/Todo')
const initialState={}
module.exports=function(state = initialState, action) {
    switch(action.type){
        case GET_TODOS:
            return {
                todos:[...action.items],
                todosById:action.items.reduce((p,v)=>{
                    p[v.id]=v;
                    return p;
                },{})
            }
        case TOGGLE_TODO://deleted=true
            var todosById={
                ...state.todosById,
                [action.id]:{
                    ...state.todosById[action.id],
                    status:state.todosById[action.id].status===0?1:0
                }
            }
            return {
                todos:Object.keys(todosById).map(function(key) {
                    return todosById[key];
                }),
                todosById:todosById
            }
        default:
            return state;
    }
}
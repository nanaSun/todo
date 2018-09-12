const {SHOW_COMPLETED}=require('../actions/filterAction')
const initialState={}
module.exports=function(state = initialState, action) {
    switch(action.type){
        case SHOW_COMPLETED:
            return action.items.filter((i)=>i.status===1)
        default:
            return state;
    }
}
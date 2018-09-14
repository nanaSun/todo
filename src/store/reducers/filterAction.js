const {FILTERACTION}=require("../types")
const {SHOW_COMPLETED}=FILTERACTION
const initialState={}
module.exports=function(state = initialState, action) {
    switch(action.type){
        case SHOW_COMPLETED:
            return action.items.filter((i)=>i.status===1)
        default:
            return state;
    }
}
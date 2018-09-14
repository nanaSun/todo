const {TODO}=require("../types")
const {TOGGLE_TODO,GET_TODOS}=TODO
const todo={
  toggleTodo:function ({id }) {
    return {
      type: TOGGLE_TODO,
      id:id
    }
  },
  getTodos: function ({items}){
    return {
      type:GET_TODOS,
      items:items
    }
  }
}
module.exports=todo
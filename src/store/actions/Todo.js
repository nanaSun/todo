const todo={
  TOGGLE_TODO:'TOGGLE_TODO',
  GET_TODOS:'GET_TODOS',
  toggleTodo:function ({id }) {
    return {
      type: todo.TOGGLE_TODO,
      id:id
    }
  },
  getTodos: function ({items}){
    return {
      type:todo.GET_TODOS,
      items:items
    }
  }
}
module.exports=todo
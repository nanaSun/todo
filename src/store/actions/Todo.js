const todo={
  TOGGLE_TODO:'TOGGLE_TODO',
  GET_TODOS:'GET_TODOS',
  toggleTodo:function ({ items,id }) {
    return {
      type: todo.TOGGLE_TODO,
      id:id,
      items:items
    }
  },
  getTodos: function getTodos({items}){
    return {
      type:todo.GET_TODOS,
      items:items
    }
  }
}
module.exports=todo
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const GET_TODOS = 'GET_TODOS';
export function toggleTodo ({ items,id }) {
  return {
    type: TOGGLE_TODO,
    id:id,
    items:items
  }
}
export function getTodos({items}){
  return {
    type:GET_TODOS,
    items:items
  }
}
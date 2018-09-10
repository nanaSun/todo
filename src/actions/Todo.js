export const DELETE_TODO = 'DELETE_TODO';
export function deleteTodo ({ item }) {
  return {
    type: DELETE_TODO,
    item:item
  }
}
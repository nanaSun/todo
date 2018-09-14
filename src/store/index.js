const {createStore,combineReducers}= require('../../node_modules/redux')
const todo = require('./reducers/Todo')
const filterAction = require('./reducers/filterAction')
const {toggleTodo,getTodos} = require('./actions/Todo')
const {showCompleted} = require('./actions/filterAction')

let todoDemoList=(new Array(20)).join("|").split("|").map((v,i)=>{
    return {id:i,content:"demo"+(i+1),status:i%4===0?1:0}
})

const rootReducer = combineReducers({todo: todo, filterAction: filterAction})
let store=createStore(rootReducer)

store.dispatch(showCompleted({items:todoDemoList}))
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(getTodos({items:todoDemoList}))
store.dispatch(toggleTodo({items:todoDemoList,id:1}))

//unsubscribe();
store.dispatch(toggleTodo({items:todoDemoList,id:1}))

module.exports=store


const {createStore,combineReducers,applyMiddleware}= require('../../node_modules/redux')
const ReduxThunk = require('../../node_modules/redux-thunk').default
const todo = require('./reducers/Todo')
const filterAction = require('./reducers/filterAction')
const {toggleTodo,getTodos} = require('./actions/Todo')
const {showCompleted} = require('./actions/filterAction')

// function logger({ getState }) {
//     return function(next){
//         return function(action){
//             console.log('will dispatch', action)
//             const returnValue = next(action)
//             console.log('state after dispatch', getState())
//             return returnValue
//         }
//     }
// }
// function aaa({ getState }) {
//     return function(next){
//         return function(action){
//             console.log('aaa will dispatch', action)
//             const returnValue = next(action)
//             console.log('aaa state after dispatch', getState())
//             return returnValue
//         }
//     }
// }
const rootReducer = combineReducers({todo: todo, filterAction: filterAction})
let store=createStore(rootReducer,
    applyMiddleware(ReduxThunk)
)

store.dispatch(()=>{
    console.log("dispatch")
    return fetch('http://localhost:3000/src.json')
    .then(res => res.json())
    .then(json => {
        console.log("aaa")
        return store.dispatch(getTodos({items:json}))
    })  
});

// store.dispatch(showCompleted({items:todoDemoList}))
// const unsubscribe=store.subscribe(()=>{
//     console.log(store.getState())
// })
// store.dispatch(getTodos({items:todoDemoList}))
// store.dispatch(toggleTodo({items:todoDemoList,id:1}))

// //unsubscribe();
// store.dispatch(toggleTodo({items:todoDemoList,id:1}))

module.exports=store


const {createStore,combineReducers,applyMiddleware}= require('../../node_modules/redux')
const fetch= require('../../node_modules/node-fetch')
//const ReduxThunk = require('./ReduxThunk')
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
let store=createStore(rootReducer)


function dispatchAndLog(store, action) {
    console.log('dispatching', action)
    store.dispatch(action)
    console.log('next state', store.getState())
}
// console.log("aaa")
// store.dispatch(getTodos({items:[]}))
// console.log("bbb")

// dispatchAndLog(store, getTodos({items:[]}))
// dispatchAndLog(store, getTodos({items:["aaa"]}))

function dispatchAndLog1(next) {
    console.log('dispatching')
    return next
}
function dispatchAndLog2(next) {
    console.log('dispatching2')
    return next
}
const _dispatch=store.dispatch;
function compose(){
    let middlewares=Array(arguments.length).join(",").split(",")
    middlewares=middlewares.map((i,index)=>{
        return arguments[index];
    })
    return function(action){
        middlewares.reduce((p,c)=>{
            return p(_dispatch,c(_dispatch))
        })
    }
}
store.dispatch=compose(dispatchAndLog1,dispatchAndLog2)
store.dispatch(getTodos({items:[]}))
// store.dispatch(getTodos({items:[]}))


// fetch('http://localhost:3000/src.json')
// .then(res => res.json())
// .then(json => {
//     console.log("aaa")
//     return store.dispatch(getTodos({items:json}))
// })  

// setTimeout(()=>{
//     store.dispatch(()=>{
//         return fetch('http://localhost:3000/src.json');
//     })
//     .then(res => res.json())
//     .then(json => {
//         console.log("bbb")
//         return store.dispatch(getTodos({items:json}))
//     })
//     .then(data => data)  
//     .then(data => console.log(data))  
// },1000)
// store.dispatch(showCompleted({items:todoDemoList}))
// const unsubscribe=store.subscribe(()=>{
//     console.log(store.getState())
// })
// store.dispatch(getTodos({items:todoDemoList}))
// store.dispatch(toggleTodo({items:todoDemoList,id:1}))

// //unsubscribe();
// store.dispatch(toggleTodo({items:todoDemoList,id:1}))

module.exports=store


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


// function dispatchAndLog(store, action) {
//     console.log('dispatching', action)
//     store.dispatch(action)
//     console.log('next state', store.getState())
// }
// // console.log("aaa")
// // store.dispatch(getTodos({items:[]}))
// // console.log("bbb")

// // dispatchAndLog(store, getTodos({items:[]}))
// // dispatchAndLog(store, getTodos({items:["aaa"]}))

function dispatchAndLog1(next) {
    return function(action){
        console.log('dispatching')
        next(action)
        console.log(store.getState())
    }
}
function dispatchAndLog2(next) {
    return function(action){
        console.log('dispatching2')
        next(action)
        console.log(store.getState())
    }
}
const _dispatch=store.dispatch;
function compose(){
    let middlewares=Array(arguments.length).join(",").split(",")
    middlewares=middlewares.map((i,index)=>{
        return arguments[index];
    })
    return function(action){
        middlewares.reduce((p,c)=>{
            return p(c(_dispatch))(action)
        })
    }
}
store.dispatch=compose(dispatchAndLog1,dispatchAndLog2)

// const next = store.dispatch
// const next1 = store.dispatch = function dispatchAndLog1(action) {
//     console.log('dispatching')
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
// }
// const next2 = store.dispatch = function dispatchAndLog2(action) {
//     console.log('dispatching1')
//     let result = next1(action)
//     console.log('next state1', store.getState())
//     return result
// }

store.dispatch(getTodos({items:[]}))
store.dispatch(getTodos({items:["aaa"]}))

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


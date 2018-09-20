const {createStore,combineReducers,applyMiddleware}= require('../../node_modules/redux')
const fetch= require('../../node_modules/node-fetch')
//const ReduxThunk = require('./ReduxThunk')
const todo = require('./reducers/Todo')
const filterAction = require('./reducers/filterAction')
const {toggleTodo,getTodos} = require('./actions/Todo')
const {showCompleted} = require('./actions/filterAction')

function logger({ getState }) {
    return function(next){
        return function(action){
            console.log('will dispatch', action)
            const returnValue = next(action)
            console.log('state after dispatch', getState())
            return returnValue
        }
    }
}
const ifActionIsFunction = ({dispatch,getState}) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }else{
        let res=next(action)
        
        return res
    }
}
function compose(middlewares){
    return middlewares.reduce((prevFunction,currentFunction)=>{
        return function (next) {
            return prevFunction(currentFunction(next))
        }
    })
}
function applyMiddlewareTest(){
    let middlewares=Array(arguments.length).join(",").split(",")
    middlewares=middlewares.map((i,index)=>{
        return arguments[index];
    })
    return (createStore)=>{
        return function (reducer) {
            let store = createStore(reducer)
            let _dispatch=store.dispatch
            let _getState=store.getState
            let chain = middlewares.map(function (middleware) {
                return middleware({
                    dispatch:function dispatch() {
                        return _dispatch.apply(undefined, arguments);
                    },
                    getState:_getState
                });
            });
            _dispatch=compose(chain)(store.dispatch)
            return Object.assign({},store,{
                dispatch:_dispatch
            })
        }
    }
}
const rootReducer = combineReducers({todo: todo, filterAction: filterAction})
let store=applyMiddlewareTest(ifActionIsFunction,logger)(createStore)(rootReducer)
store.dispatch((dispatch,getState)=>{
    console.log(dispatch,getState)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`resolve`)
            dispatch(getTodos({items:["aaaa"]}))
            resolve("aaaa")
        },1000);
    })
})


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

// function dispatchAndLog1(next) {
//     return function(action){
//         console.log('dispatching')
//         let res=next(action)
//         console.log(res)
//         return res
//     }
// }
// function dispatchAndLog2(next) {
//     return function(action){
//         console.log('dispatching2')
//         let res=next(action)
//         console.log(store.getState())
//         return res
//     }
// }
//const _dispatch=store.dispatch;
// function compose(){
//     let middlewares=Array(arguments.length).join(",").split(",")
//     middlewares=middlewares.map((i,index)=>{
//         return arguments[index];
//     })
//     return middlewares.reduce((prevFunction,currentFunction)=>{
//         return function (next) {
//             return prevFunction(currentFunction(next))
//         }
//     })
// }
//store.dispatch=compose(dispatchAndLog1,dispatchAndLog2)(_dispatch)

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

// let a=store.dispatch(getTodos({items:[]}))
// store.dispatch(getTodos({items:["aaa"]}))

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

// /module.exports=store


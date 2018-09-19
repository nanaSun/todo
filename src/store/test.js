let array=Array(3)
array[0]=function(next){
    return function(){
        let res= next();
        return res
    }
}
array[1]=function(next){
    return function(){
        console.log(1)
        let res= next();
        return res
    }
}
array[2]=function(next){
    return function(){
        console.log(2)
        let res= next();
        return res
    }
}
array[3]=function(next){
    return function(){
        console.log(3)
        let res= next();
        return res
    }
}
function dispatch(){
    console.log("dispatch")
    return "dispatch"
}
function newM(array){
    return array.reduce((prevFunction,currentFunction)=>{
        return function () {
            return prevFunction(currentFunction(dispatch))
        }
    })
}


console.log(newM(array)(dispatch)());
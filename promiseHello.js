function promiseHello(name){
    return new Promise((resolve)=>{
       setTimeout((name)=>{
           return resolve(`Hello ${name}`)
       },2000)
    })
}

module.exports=promiseHello;
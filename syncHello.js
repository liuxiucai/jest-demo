function hello(name,cb){
    setTimeout(function(){
        cb(`Hello ${name}`);
    },2000)
}

module.exports=hello;
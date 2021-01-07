const express = require ('express');
const app = express ()

// Request handle
app.get('/',function(request,respone){
    respone.send("hello world as <a href='/about'>about</a>")

})


app.get('/about',function(request,respone){

    respone.send("my name is anin <a href='/'>home</a>")
})
app.get('/adress',function(request,respone){

    respone.send("shibpur, narsingdi <a href='/adress'>adress</a>")
})

app.listen(5000,console.log('server runing on port 5000'))
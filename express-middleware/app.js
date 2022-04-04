import express from "express";

const app = express()

const port = 3000


const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next() // next() also can take string as an argument
}
  
app.use(myLogger)

const myLogger1 = function (req, res, next) {
    console.log('LOGGED1')
    next()
}
  
  
app.use(myLogger1)
  
app.use((req,res,next)=>{
    console.log('LOGGED2')
    next()
})
  
app.get('/', (req, res) => {
    console.log('Hello Developer')
    res.send('Hello World!')
})

  
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})

// output

// LOGGED
// LOGGED1
// LOGGED2
// Hello Developer

// ------------------ Expresss Middleware working ------------------

// when client hit endpoint point then control will go in the middleware and executes the code,
// and next() function will move the control to the next middleware.. After execution of all 
// the middleware control come back to the endpoint and then execute their own code.
// what is middleware? 
// =>  middleware nothing but sequence of function in which they are Called.
//     Remember that the function such as getC, post, put, delete are the end point function in the sequence.
//     You must also include the next() function in user defined middlewares.
//---------------------------------------------------------------------------------------------------------------------------------------
//     put the following line in the app.js code:
//     const {first,second} = require('./middle.js')
//     app.use(first)
//     app.get("/middle",second,first, (req, res) => {
//         console.log("get with middle called")
//         res.send("<h1>HELLO!</h1>");
//     });
//     when request for the route("/middle") send the functions are called in following order:
//     first => second => first => get 

exports.first = (req, res, next)=>{
    console.log("the first function is called");
    next();
}
exports.second = (req, res, next)=>{
    console.log("The second function is called");
    next();
}

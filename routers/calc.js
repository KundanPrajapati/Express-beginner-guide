const express = require('express')
const router = express.Router()

// router.use((req, res, next)=>{
//     next();
// })
router.get("/add/:x/:y",(req, res)=>{
    res.send(`<h1 style="color:red;">ADD : </h1>${(Number(req.params.x)+Number(req.params.y))}`)
})
router.get("/sub/:x/:y",(req, res)=>{
    res.send(`<h1 style="color:red;">SUB : </h1>${(Number(req.params.x)-Number(req.params.y))}`)
})
router.get("/mul/:x/:y",(req, res)=>{
    res.send(`<h1 style='color:green;'>MUL : </h1>${(Number(req.params.x)*Number(req.params.y))}`)
})
router.get("/div/:x/:y",(req, res)=>{
    res.send(`<h1 style='color:purple;'>DIV : </h1>${Number(req.params.x) / Number(req.params.y)}`)
})

module.exports = router;
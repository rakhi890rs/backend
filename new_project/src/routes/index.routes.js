const express = require('express');


const router = express.Router();

router.use((req,res,next) => {
    console.log("Route-specific middleware executed");
    next()
});


router.get('/',(req,res)=>{
    res.json({
        message:"Welcome to the api"
    })
})

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (req,res)=> {
    res.send('ok report home page');
})


// export all routes
module.exports=router;
const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{ //get method로 api/ 요청이 들어온다
    const result = {
        status:200,
        message:"blog~!",
    };
    res.status(200).send(result);
});

router.use("/post",require('./post'));



module.exports = router; 
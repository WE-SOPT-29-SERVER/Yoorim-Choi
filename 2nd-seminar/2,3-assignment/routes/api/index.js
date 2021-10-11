const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{ //get method로 api/ 요청이 들어온다
    const result = {
        status:200,
        message:"api~!",
    };
    res.status(200).send(result);
});

router.use("/blog",require('./blog'));

router.use("/users",require('./users'));


module.exports = router; 
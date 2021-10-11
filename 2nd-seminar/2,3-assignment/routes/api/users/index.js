const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{ //get method로 api/ 요청이 들어온다
    const result = {
        status:200,
        message:"users~!",
    };
    res.status(200).send(result);
});

router.use("/login",require('./login'));
router.use("/signup",require('./signup'));


module.exports = router; 
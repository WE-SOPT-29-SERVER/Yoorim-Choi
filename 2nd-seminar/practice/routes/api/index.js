const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{ //get method로 api/ 요청이 들어온다
    const result = {
        status:200,
        message:"api~!",
    };
    res.status(200).send(result);
});


module.exports = router; //생성한 router 객체를 모듈로 변환
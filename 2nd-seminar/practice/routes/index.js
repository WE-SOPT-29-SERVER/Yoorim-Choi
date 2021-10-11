var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//폴더일 경우에는 그 폴더에 들어있는 index.js를 무조건 import함 
//파일을 폴더로 바꿀 경우에는 폴더 안에 index.js를 꼭 넣어줘야 함
router.use("/api",require("./api")); ///api로 들어오는 요청들은 api 모듈로 대응하게 하겠다

router.use("/blog",require("./blog"));
module.exports = router;

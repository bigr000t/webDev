const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine","ejs");

// 미들웨어: 폼 데이터(name=value&...)를 req.body로 변환해 준다
app.use(express.urlencoded({ extended: true }));



// GET: 폼 페이지 보여주기
app.get("/", (req, res) => {
  res.render(`index`);
});

// POST: 폼에서 보낸 데이터 받기
app.post("/profile", (req, res) => {
  res.render(`profile`);
});

app.post("/project", (req, res) => {
  res.render(`project`);
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
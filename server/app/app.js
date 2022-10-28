// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     if(req.url === '/'){
//         res.end("http 루트");
//     } else if(req.url === '/login'){
//         res.end("http login");
//     }
// });

// app.listen(3001, () => {
//     console.log("http 서버")
// });

// http보다 express를 써야하는 이유
// http는 한글이 깨지기 때문에 한글처리도 해줘야하며
// 코드도 더러운편.

// const express = require("express");
// const router = express.Router();

const output = {
    login: (req, res) => {
        res.render("login");
    }
}
const process = {
    login: (req, res) => {
        console.log(req.body);
    }
}

// router.get('/', (req, res) => {
//     res.send({ test: "h1" });
// });

module.exports = {
    output,
    process,
};

// const path = require("path");


// app.use(express.static(path.join(__dirname, 'build'))); // 폴더의 파일들 전송가능

// app.get('/',(req, res) => {
//     // res.sendFile(path.join(__dirname,'public/index.html'));
//     res.send("<h1>안녕!!</h1>");
// });
// app.get("/login", (req, res) => {
//     res.send("로그인 화면");
// });

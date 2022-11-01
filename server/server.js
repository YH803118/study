const express = require('express');
const app = express();
// const test = require('./app/app');
// let members = require('./app/members');
const db = require('../db/models');
const member = require('../db/models/member');
// var cors = require('cors');
// app.use(cors());

const { Member } = db;
// app.use('/api', test);
app.use(express.json()); // middleware
// 서버로 온 리퀘스트의 바디에 json 데이터가 존재할 때 그것을 추출해서
// 리퀘스트 바디의 바디 프로퍼티의 값으로 설정해줌

const port=5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});
// listen를 호출해야 외부의 메서드를 받을 수 있다.(port번호의)


app.get("/", (req,res)=>{
    res.send(`<h1>localhost:${port} - express로 접속 성공</h1>`);
    console.log(`${port} 접속 성공`);
});
// 콜백 함수, 여기서 route handler라고도 부른다!
// req(request) : 클라이언트가 보낸 객체를 다룰 수 있다.
// res(response) : 적절한 응답을 보낼 수 있다.

// app.post("/home/login", (req,res)=>{

//     console.log("post login");
// });
app.post("/api/login", (req, res)=> {
    console.log(res);
    res.send("post 전송");
});
// app.get("/login", test.process.login);
app.get("/api/login", async (req, res)=>{
    const { team } = req.query;
    if(team){
        const teamMembers = await Member.findAll({ where: { team }, order: [[ 'admissionDate', 'DESC']]});
        // select뒤에 where을 붙인다고 생각하면 되겠지
        // where처럼 조건을 걸기 위한 객체 - 조건 객체
        res.send(teamMembers);
    } else {
        const members = await Member.findAll({ order: [[ 'admissionDate', 'DESC']]});
        // 시퀄라이즈에 의해 select sql문으로 변환되어 db에 전송
        // SELECT `id`, `name`, `team`, `admissionDate`, `createdAt`, `updatedAt` FROM `Members` AS `Member`;
        // {}가 리스폰스되는 것은 모델이 갖는 대부분의 메서드는 비동기 실행 함수이기 때문
        // await를 붙여주면 정보를 가져올때까지 기다릴 수 있다.
        // await을 쓰기 위해선 aysnc가 붙은 함수 안에서만 사용 가능.
        res.send(members);
    }
    console.log(`${team}`);
});
// 도메인 혹은 path에 api를 넣는 경우가 많다.

// app.get("/api/login/:id", (req,res)=>{
//     const { id } = req.params; // === const id = req.params.id
//     if (id === 'xxx') res.status(404).send({ message: 'this is not member' });
//     else res.send(`${id}님 환영합니다`);
// });
// app.get('/home/:id',~~) :id => 이 위치에 오는 값을 id에 담으라는 익스프레스만의 표기법
// req.params.id에 들어감
app.get('/api/login/:id', async (req,res)=>{
    const { id } = req.params;
    const member = await Member.findOne({ where: { id }});
    if(member) {
        res.send(member);
    }
    else {
        res.status(404).send({ message : 'There is no memeber with the id'});
    }
});


app.post("/api/login", async (req,res)=>{
    const newMem = req.body;
    const member = Member.build(newMem);
    // build : 하나의 멤버 모델을 생성하고 리턴 = 하나의 로우
    await member.save();
    // save : 새로운 로우 추가
    // const member = await Member.create(newMem);
    // create로 build와 save를 동시에 퉁칠 수 있지만
    // build 한 뒤 객체에 대한 수정이 필요하다면 build-save를 사용하자
    res.send(newMem);
});

// app.put('/api/login/:id', async (req,res)=>{
//     const { id } = req.params;
//     const newInfo = req.body;
//     // const member = members.find(m=>m.id===Number(id));
//     const result = await Member.update(newInfo, {where: {id}})
//     // newInfo : 대체할 정보, { where절 } : 수정할 로우

//     // if(member) {
//         // Object.keys(newInfo).forEach(prop => {
//         //     member[prop] = newInfo[prop];
//         // });
//         // res.send(member);
//     //  }
//     if(result[0]){
//         res.send({ message : `${result[0]} row(s) affected`});
//     }
//     else {
//         res.status(404).send({ message : 'There is no memeber with the id'});
//     }
// });

app.put('/api/login/:id', async (req,res) => {
    const { id } = req.params;
    const newInfo = req.body;
    const member = await Member.findOne({ where: { id }});
    if (member) {
    Object.keys(newInfo).forEach((prop) => {
        member[prop] = newInfo[prop];
    });
    await member.save();
    res.send(member);
    } else {
        res.status(404).send({ message : 'There is no memeber with the id'});
    }
})


app.delete('/api/login/:id', async (req,res)=>{
    const { id } = req.params;
    const deletedCount = await Member.destroy({ where: { id }});
    if(deletedCount){
        res.send({ message : 'Delete Success'});
    } else {
        res.status(404).send({ message : 'There is no memeber with the id'});
    }
    // const membersCount = members.length;
    // members = members.filter((member) => member.id !== Number(id));
    // if (members.length < membersCount) {
    //     res.send({ message : 'Delete Success'});
    // } else {
    //     res.status(404).send({ message : 'There is no memeber with the id'});
    // }
});

// 리소스를 post-추가 / put-수정 / delete-삭제

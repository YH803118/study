import "./Login.css";
import React from "react";
// import fetch from "node-fetch";
import { useState } from "react";
import axios from "axios";

function Login(){
    // state = {
    //    loginId : "",
    //    loginPw : "", 
    // }

    // fetch("http://localhost:5000/")
    //     .then(response => response.json())
    //     .then(response => {
    
    //     if (response.token) {
    //         localStorage.setItem("wtw-token", response.token);
    //         this.props.history.push("/main_gh");
    //     } else if (!response.token) {
    //         alert("올바른 회원이 아닙니다");
    //         this.props.history.push("/signup_gh");
    //     }
    //     });
    

    //JSON.stringify : 오브젝트를 문자열로 변경
    function getData(e) {
        // return new Promise((resolve, reject) => {
        //   // let data = 10;
        //   setTimeout(() => {
        //     resolve(10);
        //   },1000)
        // })
        // .then(res => {
        //   console.log(res); // 10
        //   return ++res;
        // })
        // .then(res => {
        //   console.log(res); // 11
        //   return ++res;
        // });
        console.log(e.target);
        fetch("/api")
        .then(res=> {
            console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
    }
    const [values, setValues] = useState({ id: "", pw: "" });
    // fetch("/login", {
    //     method: "POST",
    //     headers:{
    //         "Content-Type":"application/json",
    //     },
    //     body: JSON.stringify(values),
    // })
    const handleChange = (event)=>{
        console.log(event.target);
        const {name, value} = event.target;
        setValues({ ...values, [name]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // state에 저장한 값을 가져온다.
        console.log(values);

        axios
        .post("/api/login", values)
        .then(res=>console.log(res));
    }
    console.log(values);

    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            아이디 <input name="id" type="text" onChange={handleChange}></input><br></br>
            비밀번호 <input name="pw" type="text" onChange={handleChange}></input><br></br>
            <button type="submit"> 로그인 </button>
        </form>
    );
}

export default Login;
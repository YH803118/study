import "./Login.css";
import React, {Component} from "react";
// import fetch from "node-fetch";

class Login extends Component{
    state = {
       loginId : "",
       loginPw : "", 
    }

    // fetch("http://localhost:3000/")
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


    render() {
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

        return (
            <form className="loginForm">
                아이디 <input type="text"></input><br></br>
                비밀번호 <input type="text"></input><br></br>
                <button onClick={getData}> 로그인 </button>
            </form>
        );
    }   
}

export default Login;
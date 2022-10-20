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
        return (
            <div className="loginForm">
                아이디 <input type="text"></input><br></br>
                비밀번호 <input type="text"></input><br></br>
                <input type="button" value="로그인"></input>
            </div>
        );
    }   
}

export default Login;
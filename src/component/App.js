// import { useState } from "react";
import Timer from "./Timer";

import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import { getData } from "./api";

function App() {
  // const callApi = async()=>{
  //   axios.get("/api").then((res)=>{console.log(res.data.test)});
  // };

  // useEffect(()=>{
  //   callApi();
  // }, []);

  // const [state, setState] = useState(1);
  // const [arr, setArr] = useState(nameArr);

  // const onIncrease = () => {
  //   setState(state+1);
  //   setArr([...arr,{name:'Mr',age:state+20,}]);
  //   console.log(` click! state:${state}`);
  //   console.log(arr[state]);
  // }

  // getData().then(resoleveData => console.log(resoleveData));

  const getLoad = async () => {
    const result = await getData();
    console.log(result);
  };

  getLoad();
  return (
    <div>
      <Timer></Timer>
      {/* <button onClick={onIncrease}>+1</button>
      <p>{state}</p> */}
      <Login />
      <div>
        <Link to="/">Main</Link>
        <Link to="/Login">main</Link>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<LoginCheck />} />
      </Routes>
      <div></div>
    </div>
  );
}

function Main() {
  return (
    <div>
      <h2>MainPage</h2>
    </div>
  );
}

function LoginCheck() {
  return (
    <div>
      <h2>LoginPage</h2>
    </div>
  );
}

export default App;
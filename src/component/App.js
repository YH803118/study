// import { useState } from "react";
import Timer from "./Timer";

import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import { getData } from "./api";
import MemberInput from "./MemberInput";
import MemberList from "./MemberList";

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
  const [items, setItems] = useState();
  const getLoad = async () => {
    const result = await getData();
    setItems(result);
    console.log(result);
  };

  // const handleLoad = async (options) => {
  //   let result;
  //   try {
  //     setIsLoading(true);
  //     setLoadingError(null);
  //     result = await getReviews(options);
  //   } catch (error) {
  //     setLoadingError(error);
  //     return;
  //   } finally {
  //     setIsLoading(false);
  //   }
  //   const { reviews, paging } = result;
  //   if (options.offset === 0) {
  //     setItems(reviews);
  //   } else {
  //     setItems((prevItems) => [...prevItems, ...reviews]);
  //   }

  //   setOffset(options.offset + reviews.length);
  //   setHasNext(paging.hasNext);
  // };

  useEffect(() => getLoad(), []);
  return (
    <div>
      <Timer></Timer>
      {/* <button onClick={onIncrease}>+1</button>
      <p>{state}</p> */}
      <Login />
      <MemberInput />
      <MemberList items={items} />
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

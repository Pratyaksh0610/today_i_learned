import { useEffect, useState } from "react";
import "./App.css";
import Brick from "./component/useEffectExample/Brick";
import Calculator from "./component/useReducerExample/Calculator";
import useFetch from "./hooks/useFetch";
import withDarkMode from "./utils/withDarkMode";

function App() {
  // const [count, setCount] = useState(0);

  // const fetchPosts = function(){
  //   return fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json());
  // }

  // const {data,loading,error,fn} = useFetch(fetchPosts);

  const DarkBrick = withDarkMode(Brick);

  // useEffect(()=>{
  //   fn();
  // },[]);
  return (
    <>
      <div className="card">
        {/* {count % 2 === 0 && <Brick />} */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <Calculator/> */}
        {/* {!loading && <ul>
          {data?.map((post)=>{
            return <li key = {post.id}>{post.title}</li>
          })}
        </ul>} */}
        <DarkBrick/>
      </div>
    </>
  );
}

export default App;

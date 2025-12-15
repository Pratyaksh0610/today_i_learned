import { useContext, useEffect, useState } from "react";
import "./App.css";
import Brick from "./component/useEffectExample/Brick";
import Calculator from "./component/useReducerExample/Calculator";
import useFetch from "./hooks/useFetch";
import withDarkMode from "./utils/withDarkMode";
import CenteredDiv from "./component/CenteredDiv/CenteredDiv";
import GridComponent from "./component/Grid/GridComponent";
import GraphBFS from "./component/GraphBFS/GraphBFS";
import { NameContext } from "./context/name-context";
import PropComponent from "./component/PropComponent/PropComponent";
import FlexBox from "./component/FlexBox/FlexBox";
import Calculator2 from "./component/useReducerExample/Calculator2";

function App() {
  // const [count, setCount] = useState(0);

  // const fetchPosts = function(){
  //   return fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json());
  // }

  // const {data,loading,error,fn} = useFetch(fetchPosts);

  const DarkBrick = withDarkMode(Brick);
  // const {name,toggleName} = useContext(NameContext);
  // console.log("name is ",name);

  // useEffect(()=>{
  //   fn();
  // },[]);
  return (
    <>
    <p>App</p>
    {/* <GraphBFS/> */}
    {/* <PropComponent name="Pratyaksh" age={23} city="Hisar" state="Haryana" /> */}
    {/* <GridComponent/> */}
    {/* <FlexBox/> */}
    {/* <CenteredDiv/> */}
      {/* <div className="card"> */}
        {/* {count % 2 === 0 && <Brick />} */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <Calculator/> */}
        {/* <Calculator2/> */}
        {/* {!loading && <ul>
          {data && data.map((post)=>{
            return <li key = {post.id}>{post.title}</li>
          })}
        </ul>} */}
        {/* <DarkBrick/> */}
      {/* </div> */}
    </>
  );
}

export default App;

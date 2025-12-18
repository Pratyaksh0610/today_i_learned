import { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return 0;
  }
}

export default function Calculator2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>INC</button>
      <button onClick={() => dispatch({ type: "dec" })}>dec</button>
      <button onClick={() => dispatch({ type: "dfdfd" })}>reset</button>
    </>
  );
}

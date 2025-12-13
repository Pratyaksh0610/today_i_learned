import { useReducer } from "react";



// state → current state
// dispatch → function to send actions
// reducer → pure function that decides next state
// initialState → starting value

const initialState = 0;

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return state+1;
        
        case 'decrement':
            return state-1;

        default:
            return 0;
    }
}

export default function Calculator(){
    const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <>
        <p>{state}</p>
        <button onClick={()=>dispatch({type:'increment'})}>Increament</button>
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
        <button onClick={()=>dispatch({type:'dfsdfsd'})}>RESET</button>
        </>
    )
}
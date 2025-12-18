export default function PropComponent(props){
    console.log("<<<PROPS ARE: ",props);
    const values = [Object.entries({...props})];
    console.log("<<<<Expanded props: ",values);
    return (
        <>
        <div style={{width: '50px',height: '50px',backgroundColor:'red'}}>
            {/* <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{city}</h1>
            <h1>{state}</h1> */}
        </div>
        </>
    )
}
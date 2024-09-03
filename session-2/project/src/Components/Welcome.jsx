import { useState } from "react";
import React from "react";
function Welcome(props) {

    // console.log(props);
    let [counter, setCounter] = useState(0);
    let [name, setName] = useState("Ali");
    return (
        <>
            <h1> Hello , {props.name}</h1>
            <h2>Current Name: {name}</h2>
            {/* <h1>  {props.counter}</h1> */}
            {/* <button
                onClick={() => {
                    setCounter(counter + 1);
                    // console.log(counter);
                    
                }}>
                +
            </button> */}
            <button
                onClick={() => {
                    setName("suiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
                    
                }}>
                Click me
            </button>
        </>
    );

}
export default Welcome;


// this is a functional component that takes props as an argument and returns a JSX element
// this component is imported in App.jsx and used as a self closing tag with name and age as props
import React from "react";

class Welcomefc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    // or 
    // state = {
    //     firstName: "Ali",
    //     lastName: "Khan"
    // }
    render() {

        console.log(this.props);

        // return (
        //     // <><h1>Hello ,{this.props.name}</h1><button onClick={() => {
        //     //     this.setState({ counter: this.state.counter + 1 })
        //     //         >
        //     //         Click; me;
        //     //     button >
            
        // )
            }

}

export default Welcomefc
// this is a class component that extends React.Component and uses the render method to return a JSX element
// this component is imported in App.jsx and used as a self closing tag with name and age as props
// the props object is accessed using this.props in class components
// the props object is accessed directly in functional components as an argument
// the props object is used to pass data from parent to child components
// the props object is immutable and cannot be changed by the child component
// the props object can be used to pass functions as props to child components

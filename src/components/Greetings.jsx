import { Fragment } from "react";

function Greetings(props) {
    return ( 
       <Fragment>
    <h1>Hello, {props.name} {props.surname}!</h1>;
    <h2>this text was not oroginally there </h2>
    </Fragment>
    )
};

export default Greetings;
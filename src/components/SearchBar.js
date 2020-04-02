import React from "react";

export default (props) => {
    const handleIt = ({target}) => {
        props.handler = target.value
    }
    return (<input value = {props.term} onChange ={handleIt} type="text"></input>)
}
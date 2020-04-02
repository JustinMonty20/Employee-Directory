import React from "react"

function SearchBar(props) {
   return (<input type = "text" onChange = {props.change}></input>)
}

export default SearchBar;
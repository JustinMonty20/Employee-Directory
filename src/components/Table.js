import React, {Component} from "react";
import API from "../utils/API";
import TableData from "./TableData"
import SearchBar from "./SearchBar";

class Table extends Component {
    state = {
        employees: [],
        search: ""
    }

    componentDidMount() {
        this.getRandoms(25)
    }

    handleInputChange = ({target}) => {
        this.setState({search: target.value})
    }

    handleFilter = (e) => {
        e.preventDefault();
        this.setState({employees: this.state.employees.map(emp=> emp.name.first === this.state.search)})

    }

    getRandoms = (query) => {
        API.search(query)
        .then(({data}) => this.setState({employees: data.results}))
    }


    render() {
        return (
            <div className = "table">
            <TableData people = {this.state.employees}/>
            </div>
        )
    }
}

export default Table
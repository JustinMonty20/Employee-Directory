import React, {Component} from "react";
import API from "../utils/API";
import TableData from "./TableData"
import SearchBar from "./SearchBar";
import Container from "./Container"
import Nav from "./Nav"

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

    getRandoms = (query) => {
        API.search(query)
        .then(({data}) => this.setState({employees: data.results}))
    }


    render() {
        return (
          <Container>
            <Nav>
            </Nav>
            <SearchBar/>
            <div className = "table">
                <TableData people = {this.state.employees}/>
            </div>
            </Container>


        )
    }
}

export default Table
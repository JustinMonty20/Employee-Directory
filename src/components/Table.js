import React, {Component, useReducer} from "react";
import API from "../utils/API";
import TableData from "./TableData"
import SearchBar from "./SearchBar";


const [searchTerm, setSearchTerm] = useState("")

class Table extends Component {
    state = {
        employees: [],
    }
   
    handler = (term) => {
        setSearchTerm(term);
    }

   filterList = () => {
       employees.filter(emp=> {
           return emp.name
       })
   }
  
    componentDidMount() {
        this.getRandoms(25)
    }

    getRandoms = (query) => {
        API.search(query)
        .then(({data}) => this.setState({employees: data.results}))
    }

    render() {
        return (
            <div className = "table">
            <SearchBar terms = {}/>
            <TableData people = {this.state.employees}/>
            </div>
        )
    }
}

export default Table
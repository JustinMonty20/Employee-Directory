import React from "react";


function TableData(props) {
   return (
      <table className="table-data">
         <tbody>
            <tr className= "thead">
               <th>Picture</th>
               <th>First and Last Name</th>
               <th>Phone #</th>
               <th>Email</th>
               <th>DOB</th>
            </tr>
            {props.people.map(person => (
               <tr>
                  <td><img src={person.picture.thumbnail} alt={`${person.name.first} ${person.name.last} profile pic`}></img></td>
                  <td>{`${person.name.first} ${person.name.last}`}</td>
                  <td>{person.phone}</td>
                  <td>{person.email}</td>
                  <td>{person.dob.date.substring(0, 10)}</td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}

export default TableData
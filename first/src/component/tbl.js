import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';


class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      students: [
       /* { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }*/
     ]
     }
  }

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {     
      this.setState({students:res.data});        
      console.log(res.data);
    })
   }
   
  renderTableData() {   
    return this.state.students.map((student, index) => {
       const { id, name, username, email,address,phone,website,company } = student //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{username}</td>
             <td>{email}</td>       
             <td>{phone}</td>       
             <td>{website}</td>       
             <td>
               {address.street}_
               {address.suite}_
               {address.city}_
               {address.zipcode}               
             </td>       
             <td>{company.name}</td>
          </tr>
       )
    })
 }

  render() {     
    return ( 
      <div className="container text-center">
          <br/>
      <Table striped bordered hover size="sm">
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>User Name</th>
    <th>Email</th>   
    <th>Phone</th>   
    <th>Website</th>   
    <th>Address</th>  
    <th>Company</th> 
  </tr>
</thead>
<tbody>
{this.renderTableData()}
</tbody>
</Table>
    </div>
     );
  }
}
 
export default Tables;

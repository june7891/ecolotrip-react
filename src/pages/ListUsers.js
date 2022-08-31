import axios from 'axios'
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const ListUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
    axios.get("http://localhost/api/users").then(function(response) {
      console.log(response.data);
      setUsers(response.data);
      
    }); 
    }

   
  return (
    <div>
    <h1>List Users</h1>
    <table>
        <thead>
            <tr>

                <th>#</th>
                <th>username</th>
                <th>email</th>
                <th>created_at</th>
                
            </tr>
        </thead>

        <tbody>
            {users.map((user, key) =>
            <tr key={key}> 
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.account_created_at}</td>
            <Link to={`user/${user.id}/edit`}>Edit</Link>
            <button>Delete</button>
            </tr>
            )}
        </tbody>
    </table>

    </div>
   


  )
}

export default ListUsers
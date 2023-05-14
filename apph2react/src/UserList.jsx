import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {  
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      
        const response = await axios.get(
          'http://localhost:8080/users'
        );
        const usersData = response.data;
        setUsers(usersData);
        setIsLoading(false);
    
    };
    fetchUsers();
  }, []);

  return (
    <>
    <h3>Users</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
              <li key={user.key}>
                  
                <strong>Id:</strong> {user.id}
                <strong>Name:</strong> {user.name} <br />
                <strong>SurName:</strong> {user.surname} <br />
                <strong>Phone:</strong> {user.phone} <br />
                <strong>Pages:</strong> {user.address} <br />
            </li>
          ))}
        </ul>

      )}
    </>
  );
};

export default UserList;
import React, { useState, useEffect } from 'react';
import AuthorForm from './AuthorForm.js';
import AuthorList from './AuthorList';
import UserList from './UserList';

function App() {
  const [authors, setAuthors] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleAuthorSubmit = (authorName) => {
    setAuthors([...authors, authorName]);
  };

  return (
    <div className="App">
      <h1>Assessment 1 App</h1>
      <AuthorForm onSubmit={handleAuthorSubmit} />
      <AuthorList authors={authors} />
      <UserList users={users} />
    </div>
  );
}

export default App;
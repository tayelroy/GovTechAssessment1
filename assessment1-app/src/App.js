import React, { useState, useEffect, Suspense, lazy } from 'react';
import AuthorForm from './AuthorForm';
import './App.css';

const AuthorList = lazy(() => import('./AuthorList'));
const UserList = lazy(() => import('./UserList'));

const App = () => {
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
    <div className="container">
      <h1>Assessment 1 App</h1>
      <AuthorForm onSubmit={handleAuthorSubmit} />
      <Suspense fallback={<div>Loading authors...</div>}>
        <AuthorList authors={authors} />
      </Suspense>
      <Suspense fallback={<div>Loading users...</div>}>
        <UserList users={users} />
      </Suspense>
    </div>
  );
};

export default App;
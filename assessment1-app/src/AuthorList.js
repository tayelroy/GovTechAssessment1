import React from 'react';

function AuthorList({ authors }) {
  return (
    <div>
      <h2>Submitted Authors</h2>
      {authors.length > 0 ? (
        <ul>
          {authors.map((author, index) => (
            <li key={index}>{author}</li>
          ))}
        </ul>
      ) : (
        <p>No authors submitted yet.</p>
      )}
    </div>
  );
}

export default AuthorList;

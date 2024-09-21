import React, { useState } from 'react';

function AuthorForm({ onSubmit }) {
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authorName.trim()) {
      onSubmit(authorName);
      setAuthorName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        placeholder="Enter Author Name: John Doe - John@email.com"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AuthorForm;
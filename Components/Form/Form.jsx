import React, { useState } from 'react';

 function  Form({ setUsername }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(input);
  };

  return (
    <form onSubmit={handleSubmit}>
          <h3>Search user Github</h3>
          <div className="mb-3">
          <label>User name : </label>
         
      <input
        type="text"
        className="form-control"
        placeholder="User Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default Form;



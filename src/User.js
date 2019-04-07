import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from './context';

const User = () => {
  const [{ user }, dispatch] = useContext(AppContext);
  const [name, setName] = useState(user.name);

  const actionSetUserName = name => dispatch({ type: 'SET_USER_NAME', name });

  const handleOnChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  useEffect(() => {
    actionSetUserName(name);
  }, [name]);

  return (
    <div>
      <h2 className="normal">User Component</h2>
      <div>
        <div>Hello, {user.name}</div>
        <input value={user.name} onChange={handleOnChange} />
      </div>
    </div>
  );
};

export default User;

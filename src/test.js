import React, { useState, useEffect } from 'react';

const test = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(() => [users]);
  }, []);

  return <div />;
};

export default test;

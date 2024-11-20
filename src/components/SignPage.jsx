import React from 'react';
import '../App.css';

const SignPage = ({ signName, backgroundColor, children }) => {
  return (
    <div className="sign-page" style={{ backgroundColor }}>
      <h1>{signName}</h1>
      <div className="controls">{children}</div>
    </div>
  );
};

export default SignPage;

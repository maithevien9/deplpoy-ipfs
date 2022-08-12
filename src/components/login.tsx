import React from 'react';

interface IProps {
  username: string;
}

const Login: React.FC<IProps> = ({ username }) => {
  return <div>Login {username}</div>;
};

export default Login;

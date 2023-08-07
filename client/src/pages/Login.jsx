import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { ...formState },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      // console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div id='login' className="container">
      <h2>Login</h2>
      <form className='column' onSubmit={handleFormSubmit}>
        <div className="item center">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="item center">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="password"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div className='item center'>
            <p className="error-message">
              {error.message}
            </p>
          </div>
        ) : null}
        <div className='item center'>
          <button className='' type="submit">Submit</button>
        </div>
        <div className='item center'>
          <Link to="/signup">Go to Signup</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
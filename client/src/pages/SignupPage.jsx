import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { CREATE_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [createUser, { error }] = useMutation(CREATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await createUser({
        variables: { ...formState },
      });
      const token = mutationResponse.data.createUser.token;
      Auth.login(token);
    } catch (error) {
      // console.log(error);
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
    <div id='signup-page' className="container">
      <h2>Signup</h2>
      <form className='section' onSubmit={handleFormSubmit}>
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
            id="pwd"
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
          <button type="submit">Submit</button>
        </div>
        <div className='item center'>
          <Link to="/login" >
            Go to Login
          </Link>
        </div>
      </form>
    </div>
  );
}

function SignupPage(props) {
  return (
    <div className="page">
      <Signup
        {...props}
      />
    </div>
  );
}


export default SignupPage;

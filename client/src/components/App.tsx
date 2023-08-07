import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import Header from './header/Header';
import OutsideClick from './OutsideClick';
import Menu from './Menu';
import {
  Home,
  Blog,
  Tabulator,
  MusicTheory,
  Login,
  Signup,
  Profile,
  NoMatch
} from '../pages';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [title, setTitle] = useState('Matthew Miller');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div id="app">
          <Header 
            title={title}
            onMenuClick={() => {setMenuOpen(!menuOpen)}}
          />
          <div id='main'>
            <OutsideClick
              onClick={() => {setMenuOpen(false)}}
              omitElements={['#menu-button']}
            >
              <Menu
                open={menuOpen}
                onClick={() => setMenuOpen(false)}
              />
            </OutsideClick>
            <div className='page'>
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/blog"
                  element={<Blog />}
                />
                <Route
                  path="/tabulator"
                  element={<Tabulator />}
                />
                <Route
                  path="/music-theory"
                  element={<MusicTheory />}
                />
                <Route
                  path="/signup"
                  element={<Signup />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route
                  path="/profile"
                  element={<Profile />}
                />
                <Route
                  path="*"
                  element={<NoMatch />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

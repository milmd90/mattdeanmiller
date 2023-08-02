import { Link } from 'react-router-dom';

function NoMatch(props) {
  return (
    <div id='no-match' className="container">
      <h2>Error</h2>
      <div className='section'>
        <div className='item'>
          <Link to='/'>
            Click to return home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;

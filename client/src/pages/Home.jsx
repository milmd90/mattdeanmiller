import Footer from '../components/Footer';

function Home(props) {
  return (
    <div id='home' className="container">
      <div className='item center'>
        <img id='logo' src="/images/logo_black.png" alt="MDM"/>
      </div>
      <div className='item center column'>
        <h2>Welcome!</h2>
        <p>
          I'm Matthew Miller, a music producer, audio engineer, and musician in Los Angeles.
        </p>
        <p>
          I plan to use this site to share projects I work on, as well as tools for musicians and engineers.
        </p>
        <p>
          This site is currently under development, so please visit again to see what features and content have been added! 
        </p>
        <p>
          All business inqueries can be sent to me at productionbymiller@gmail.com
        </p>
      </div>
      <div className='item center'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

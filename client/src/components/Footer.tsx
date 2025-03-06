import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSoundcloud, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <a href="https://www.instagram.com/prod.by.miller" target="_blank">
          <FontAwesomeIcon className='icon' icon={faInstagram} />
        </a>
        <a href="https://www.soundcloud.com/prod-by-miller" target="_blank">
          <FontAwesomeIcon className='icon' icon={faSoundcloud} />
        </a>
        <a href="https://www.youtube.com/@prod.by.miller" target="_blank">
          <FontAwesomeIcon className='icon' icon={faYoutube} />
        </a>
        <a href="https://open.spotify.com/user/126637610" target="_blank">
          <FontAwesomeIcon className='icon' icon={faSpotify} />
        </a>
        <a href="mailto:productionbymiller@gmail.com" target="_blank">
          <FontAwesomeIcon className='icon' icon={faEnvelope} />
        </a>
      </div>
    );
  }
};

export default Footer;

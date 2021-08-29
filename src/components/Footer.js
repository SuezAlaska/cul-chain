import React from 'react';
import Swal from 'sweetalert2'
import './Footer.css';
import logo from '../assests/images/logo.png';
import { Link } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';


const ReactSwal = withReactContent(Swal)
const ReactSwalWithInput = ReactSwal.mixin({
  input: 'text',
  confirmButtonText: <i>OK</i>
});

  const getCurrentYear = (props) => {
    return new Date().getFullYear().valueOf;  };

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the CulChain Adventure newsletter to receive our best NFT deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button onClick={ReactSwal} className='btne'>Subscribe</button>
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={logo} className="logo" />
            </Link>
          </div>
          <p class='website-rights'>Copyright &copy; CulChain {getCurrentYear()} </p>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-discord' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

import React from 'react';
import { Wrapper } from './FooterStyles';

function Footer () {
   return (
      <Wrapper>
         <h5>&copy; {new Date().getFullYear()}
            <span>ComfySloth.</span>
            All right reserved. Devloped by
         </h5>
         <a href="https://twitter.com/lhbibe_ismail" target="_blank" rel="noopener noreferrer">Ismail Lahbiyeb .</a>
      </Wrapper>
   );
}

export default Footer;

import React from 'react';
import styled from 'styled-components/macro'

import {PageHero} from '../components'

function CheckoutPage () {
   return (
      <main>
         <PageHero title='Checkout'/>
         <Wrapper className="page">
            <h1>Checkout Page</h1>
         </Wrapper>
      </main>
   );
}

const Wrapper = styled.div``;

export default CheckoutPage;

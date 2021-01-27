import styled from 'styled-components/macro';

export const NavContainer = styled.nav`
height: 5rem;
display: flex;
align-items: center;
justify-content: center;

.nav-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 175px;
    margin-left: -15px;
  }
}
.nav-toggle {
  background: transparent;
  border: transparent;
  color: var(--clr-primary-5);
  outline: 0;
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
}
.nav-links {
  display: none;
}
.cart-btn-wrapper {
  display: none;
}
@media (min-width: 992px) {
  .nav-toggle {
    display: none;
  }
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }
  .nav-links {
    display: flex;
    justify-content: center;
    li {
      margin: 0 0.5rem;
    }
    a {
      color: var(--clr-grey-3);
      font-size: 1rem;
      font-weight: 500; 
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding: 0.5rem;
      &:hover {
        border-bottom: 3px solid var(--clr-primary-7);
      }
    }
  }
  .cart-btn-wrapper {
    display: grid;
  }
}
`;
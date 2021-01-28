import styled from 'styled-components/macro';

export const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  a{
    color: var(--clr-primary-5);
    border-bottom: 2px solid transparent;

    &:hover{
      color: var(--clr-white);
      border-bottom: 2px solid var(--clr-primary-5);
    }
  }



  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

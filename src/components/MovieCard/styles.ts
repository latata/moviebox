import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 2%;
  font-weight: 500;
  color: var(--gray-50);
  &:hover {
    color: var(--primary);
  }
`;

export const Container = styled.div`
  height: 48rem;
  width: 28.2rem;

  padding: 0.8rem;
  border-radius: 12px;
  background-color: var(--black-65);
  backdrop-filter: blur(80px);

  img {
    height: 40rem;
    width: 26.6rem;
    border-radius: 8px;
  }

  > div {
    margin: 0.8rem 0;
  }

  @media (min-width: 768px) {
    height: 48rem;
    width: 26.6rem;

    img {
      height: 40rem;
      width: 25rem;
      border-radius: 8px;
    }
  }
`;

export const Favorite = styled.div`
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  right: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 4rem;
  width: 4rem;
  border-radius: 8px;
  background-color: var(--black-65);
  backdrop-filter: blur(80px);
  cursor: pointer;

  svg {
    color: var(--warning);
  }
`;

export const Type = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  border-radius: 8px;
  background-color: var(--black-65);
  backdrop-filter: blur(80px);
  color: var(--white);
  height: 4rem;
  font-size: 1.4rem;
  padding: 1rem;
`

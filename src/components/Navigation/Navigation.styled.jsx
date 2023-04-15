import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 12;
  font-weight: 700;
  transition: all 0.5s ease;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

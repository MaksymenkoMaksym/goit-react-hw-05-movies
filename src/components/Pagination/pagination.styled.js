import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;

  padding-left: 0;
  padding-right: 0;
  padding-bottom: 65px;

  font-size: 18px;
  line-height: 1.22;

  list-style: none;
  gap: 10px;
`;

export const PaginatedItem = styled(Link)`
  padding: 6px 12px;
  cursor: pointer;
  color: orange;
  &:hover {
    box-shadow: 0 0 5px #1eb92b, 0 0 10px #1eb92b, 0 0 15px #1eb92b,
      0 0 20px #1eb92b, 0 0 15px #ffffff, 0 0 30px #ffffff, 0 0 20px #ffffff,
      0 0 5px #ffffff;

    transform: scale(1.05, 1.05);
    border-radius: 10px 0px;
  }
`;

export const ActiveItem = styled(PaginatedItem)`
  box-shadow: 0 0 5px #1eb92b, 0 0 10px #1eb92b, 0 0 15px #1eb92b,
    0 0 20px #1eb92b, 0 0 15px #ffffff, 0 0 30px #ffffff, 0 0 20px #ffffff,
    0 0 5px #ffffff;
`;

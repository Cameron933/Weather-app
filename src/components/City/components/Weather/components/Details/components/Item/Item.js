import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  opacity: 0.7;
  font-size: 18px;
`;
const Value = styled.div`
  margin-top: 14px;
`;

const Item = ({ title, children }) => {
  return (
    <div>
      <Container>
        <div>{title}</div>
        <Value>{children}</Value>
      </Container>
    </div>
  );
};
export default Item;

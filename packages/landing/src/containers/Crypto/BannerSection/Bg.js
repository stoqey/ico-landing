import React from 'react';
import Bg from './Background';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: 0%;
  top: 0%;
  height: auto;
  overflow: hide;
`;

export const BgColors = () => {
  return (
    <Wrapper>
      <Bg />
    </Wrapper>
  );
};

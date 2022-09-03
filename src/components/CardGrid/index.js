import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-gap: 1.35rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;


const CardGrid = (props) => {
  return (
    <CardContainer>
      {props.children}
    </CardContainer>
  )
};

export default CardGrid;

import React from 'react';
import styled from 'styled-components';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

const CardDiv = styled.div`
  background-color: var(--card-bg);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 12px;
  border: 1px solid var(--card-border);
  overflow: hidden;
  

  &:hover {
    box-shadow: var(--card-shadow);
  }
`;

const CardContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.header`
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 600;
`;

const Description = styled.div`
  grid-area: body;
  max-height: 42px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.75rem;
`;

const StyledLink = styled(Link)`
  color: inherit;
  &:hover { 
    color: inherit;
    text-decoration: none;
  };
`;

const Card = (props) => {
  return (
    <CardDiv>
      <StyledLink to={props.href}>
        <CardContainer>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
        </CardContainer>
      </StyledLink>
    </CardDiv>
  )
};

export default Card;

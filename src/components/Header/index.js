import React from 'react';
import styled from 'styled-components';
import Link from '@docusaurus/Link';
import HeroImage from '@site/static/img/hero.svg';

const Container = styled.div`
  overflow: hidden;
  display: block;
  height: calc(100vh - 60px);
  padding: 60px;
  text-align: center;
`;

const SVGContainer = styled.div`
  height: 65%%;
	width: 65%;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
`;

const Button = styled(Link)`
  color: var(--ifm-button-color);
  display: inline-block;
  line-height: 1.5;
  font-size: 1.18125rem;
  font-weight: 700;
  padding: 0.75rem 5rem;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  border-radius: 6px;
  text-decoration: none;
  background-size: 200% auto;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  background-image: linear-gradient(to right, #F37676 0%, #fda085 50%, #F37676 100%);
  transition: 0.5s;
  &:hover {
    background-position: right center;
    text-decoration: none;
    color: var(--ifm-color-text);
  }  
`;

const Header = () => {
  return (
    <Container>
      <SVGContainer>
        <HeroImage title="Docusaurus Logo" />
      </SVGContainer>
      <Button to="/recipes/intro">Start cooking</Button>
    </Container>
  )
};

export default Header;

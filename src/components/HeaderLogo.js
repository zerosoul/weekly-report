import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';

const LogoWrapper = styled.div`
  height: 50px;
  margin-left: 20px;
  > img {
    height: 100%;
  }
`;

export default class HeaderLogo extends Component {
  render() {
    return (
      <LogoWrapper>
        <img src={Logo} />
      </LogoWrapper>
    );
  }
}

import React from 'react';
import PropTypes from "prop-types"
import styled from "styled-components";

const Title = styled.h1`
  color: #1D1D1B;
  font-family: 'Montserrat', sans-serif;
  font-size: 60px;
  font-weight: 500;
`;

class A_Title extends React.Component {
  render () {
    return (
      <div class="a_title">
        <Title>
        Новости
        </Title>
      </div>
    );
  }
}

export default A_Title

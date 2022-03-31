import React from 'react';
import PropTypes from "prop-types"
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 60px;
  font-weight: 500;
`;

class A_Title extends React.Component {
  render () {
    return (
        <Title>
          Новости
        </Title>
    );
  }
}

export default A_Title

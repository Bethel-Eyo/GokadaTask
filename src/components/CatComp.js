import React from 'react';
import styled from 'styled-components';

const CatComp = props => {
  return (
    <Container>
      <Title>{props.fact}</Title>
      <Text>{props.created}</Text>
    </Container>
  );
};

export default CatComp;

const Container = styled.View`
  width: 100%;
  height: 100px;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 15px;
`;

const Text = styled.Text`
  font-size: 12px;
  color: blue;
`;

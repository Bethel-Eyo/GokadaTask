import React, {useEffect} from 'react';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {MenuIcon} from '../components/SVGImages';

const Extras = ({navigation}) => {
  useEffect(() => {
    navigation.setParams({
      open: openMenu,
    });
  }, []);

  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <Container>
      <Text>Welcome To Gokada Extras</Text>
    </Container>
  );
};

Extras.navigationOptions = ({navigation}) => {
  return {
    headerTitle: <Text>Extras</Text>,
    headerLeft: (
      <TouchableOpacity
        onPress={navigation.getParam('open')}
        style={{marginLeft: 30 }}>
        <MenuIcon />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: '#f8f8f8',
    },
  };
};

export default Extras;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

import React, {useEffect} from 'react';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {MenuIcon} from '../components/SVGImages';
// import MenuIcon from '../assets/svgs/menu-outline.svg';

const Home = ({navigation}) => {
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
      <Text>Welcome To Gokada Home</Text>
    </Container>
  );
};

Home.navigationOptions = ({navigation}) => {
  return {
    headerTitle: <Text>Gokada Home</Text>,
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

export default Home;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

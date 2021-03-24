import React, {useEffect} from 'react';
import styled from 'styled-components';
import {TouchableOpacity, ScrollView} from 'react-native';
import {MenuIcon} from '../components/SVGImages';
import CatComp from '../components/CatComp';
import {useSelector, useDispatch} from 'react-redux';
import {getCatFacts} from '../actions/cat';

const CatFacts = ({navigation}) => {
  const {catFacts} = useSelector(state => state.cat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatFacts());
  }, []);

  useEffect(() => {
    navigation.setParams({
      open: openMenu,
    });
  }, []);


  const openMenu = () => {
    navigation.openDrawer();
    console.log(catFacts[0].text);
  };

  return (
    <ScrollView>
      <Container>
        {catFacts == null ? (
          <Text>No cats displayed. pull to refresh</Text>
        ) : (
          <>
            {catFacts.map((data,index) => (
              <CatComp key={index} fact={data.text} created={data.createdAt} />
            ))}
          </>
        )}
      </Container>
    </ScrollView>
  );
};

CatFacts.navigationOptions = ({navigation}) => {
  return {
    headerTitle: <Text>Cat Facts</Text>,
    headerLeft: (
      <TouchableOpacity
        onPress={navigation.getParam('open')}
        style={{marginLeft: 30}}>
        <MenuIcon />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: '#f8f8f8',
    },
  };
};

export default CatFacts;

const Container = styled.SafeAreaView`
  align-items: center;
`;

const Text = styled.Text``;

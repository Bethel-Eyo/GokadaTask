import axios from 'axios';
import {Alert} from 'react-native';
import {GET_CAT_FACTS} from '../types';

export const getCatFacts = () => dispatch => {
  axios
    .get('https://cat-fact.herokuapp.com/facts')
    .then(res => {
      dispatch({
        type: GET_CAT_FACTS,
        payload: res.data,
      });
      Alert.alert('Data gotten successfully');
    })
    .catch(error => {
      Alert.alert('An error occured' + error);
    });
};

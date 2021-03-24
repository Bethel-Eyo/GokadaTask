import {createStackNavigator} from 'react-navigation-stack';
import CatFacts from '../screens/CatFacts';
import FactDetails from '../screens/FactDetails';

const CatStack = createStackNavigator({
  Facts: {
    screen: CatFacts,
  },
  Details: {
    screen: FactDetails,
  },
});

export default CatStack;

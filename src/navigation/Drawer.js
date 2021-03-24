import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Extras from '../screens/Extras';
import Home from '../screens/Home';
import CatStack from './Cat';

const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: {
      title: 'Gokada Home'
    }
  }
});

const ExtrasStack = createStackNavigator({
  ExtraScreen: {
    screen: Extras,
    navigationOptions: {
      title: 'Extras'
    }
  }
});

const DrawerStack = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  CatFacts: {
    screen: CatStack,
    navigationOptions: {
      title: 'Cat Facts from Api'
    }
  },
  Extras: {
    screen: ExtrasStack,
  },
});

export default DrawerStack;
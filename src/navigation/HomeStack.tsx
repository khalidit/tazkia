import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackNavigatorParamList } from './types';
import HomeScreen from '../screens/home';
import DetailScreen from '../screens/DetailScreen';
import SunanScreen from '../screens/sunan';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
      <HomeStack.Screen name="Sunan" component={SunanScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

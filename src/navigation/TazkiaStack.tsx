import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TazkiaStackNavigatorParamList } from './types';
import Part1Screen from '../screens/tazkia/part1';
import Part2Screen from '../screens/tazkia/part2';
import Part3Screen from '../screens/tazkia/part3';

const TazkiaStack = createNativeStackNavigator<TazkiaStackNavigatorParamList>();

const TazkiaStackNavigator = () => {
  return (
    <TazkiaStack.Navigator>
      <TazkiaStack.Screen name="Part1" component={Part1Screen} />
      <TazkiaStack.Screen name="Part2" component={Part2Screen} />
      <TazkiaStack.Screen name="Part3" component={Part3Screen} />
    </TazkiaStack.Navigator>
  );
};

export default TazkiaStackNavigator;

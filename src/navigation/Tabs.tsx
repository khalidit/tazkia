import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabNavigatorParamList } from './types';
import HomeStackNavigator from './HomeStack';
import TazkiaScreen from '../screens/tazkia';
import ZikrScreen from '../screens/zikr';
import SunanScreen from '../screens/sunan';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Tazkia" component={TazkiaScreen} />
      <Tab.Screen name="Sunan" component={SunanScreen} />
      <Tab.Screen name="Zikr" component={ZikrScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;

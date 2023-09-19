import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./Tabs";
import Part1Screen from "../screens/tazkia/part1";
import Part2Screen from "../screens/tazkia/part2";
import Part3Screen from "../screens/tazkia/part3";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default RootNavigator;

import type {
  CompositeNavigationProp,
  RouteProp,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Item } from "../domains/Item";

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Detail: Item;
  Sunan: undefined;
};

export type BottomTabNavigatorParamList = {
  HomeStack: HomeStackNavigatorParamList;
  Tazkia: undefined;
  Zikr: undefined;
  Sunan: undefined;
  Part1: undefined;
  Part2: undefined;
  Part3: undefined;
};

export type TazkiaStackNavigatorParamList = {
  Part1: undefined;
  Part2: undefined;
  Part3: undefined;
};

export type TazkiaNavigatorParamList = {
  Part1: undefined;
  Part2: undefined;
  Part3: undefined;
};

export type TazkiaScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<TazkiaNavigatorParamList, "Part1">,
  BottomTabNavigationProp<BottomTabNavigatorParamList, "Tazkia">
>;

export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, "Detail">,
  BottomTabNavigationProp<BottomTabNavigatorParamList, "Tazkia">
>;

export type DetailScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "Detail"
>;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import {colors} from '../config/theme';
import TopTabNavigator from './TopTabNavigator';
import {StackNavigator} from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export type RootStackParams = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
};

const Tab = createBottomTabNavigator<RootStackParams>();
const BottomTypeNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.backgroudColor,
      }}
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderColor: 'transparent',
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          tabBarIcon: () => <Icon name="rocket-outline" />,
          tabBarLabel: 'Tab 13',
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          tabBarIcon: () => <Icon name="rocket-outline" />,
          title: 'Tab2',
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          tabBarIcon: () => <Icon name="rocket-outline" />,
          title: 'Tab3',
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTypeNavigator;

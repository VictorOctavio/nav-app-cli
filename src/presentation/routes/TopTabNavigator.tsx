import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Tab1Screen from '../screens/tabs/top/Tab1Screen';
import Tab2Screen from '../screens/tabs/top/Tab2Screen';
import HamburgerMenu from '../components/HamburgerMenu';

export type RootStackParamsTabTop = {
  Tab1: undefined;
  Tab2: undefined;
};

const TabTop = createMaterialTopTabNavigator<RootStackParamsTabTop>();
const TopTabNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <TabTop.Navigator>
        <TabTop.Screen name="Tab1" component={Tab1Screen} />
        <TabTop.Screen name="Tab2" component={Tab2Screen} />
      </TabTop.Navigator>
    </>
  );
};

export default TopTabNavigator;

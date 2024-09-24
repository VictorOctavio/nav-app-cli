import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {colors} from '../config/theme';
import {StyleSheet, View} from 'react-native';
import BottomTypeNavigator from './BottomTypeNavigator';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.backgroudColor,
        drawerInactiveTintColor: colors.primary,
        drawerItemStyle: {
          borderRadius: 15,
          paddingLeft: 10,
        },
        drawerStyle: {
          backgroundColor: colors.backgroudColor,
          width: '60%',
        },
      }}>
      <Drawer.Screen name="Tabs" component={BottomTypeNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default SideMenuNavigator;

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={[styles.wrapperAvatar]} />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  wrapperAvatar: {
    height: 120,
    alignSelf: 'center',
    width: 120,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 100,
  },
});

import React from 'react';
import {Text, Pressable} from 'react-native';
import {useEffect} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, [navigation]);
  return <></>;
};

export default HamburgerMenu;

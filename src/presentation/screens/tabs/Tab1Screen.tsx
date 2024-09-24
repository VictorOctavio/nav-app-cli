import React from 'react';
import {View, Text, TextInput} from 'react-native';
import HamburgerMenu from '../../components/HamburgerMenu';

const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      <TextInput placeholderTextColor={'red'} placeholder="vmoass" />
    </View>
  );
};

export default Tab1Screen;

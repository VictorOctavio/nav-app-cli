import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: top + 10,
      }}>
      <Text>ProfileScreen</Text>
      <PrimaryButton
        title="Open Drawer"
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer);
        }}
      />
    </View>
  );
};

export default ProfileScreen;

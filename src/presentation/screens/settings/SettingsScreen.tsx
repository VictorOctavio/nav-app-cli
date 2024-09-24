import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../config/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.wrapper}>
      <Text>SettingsScreen</Text>
      <PrimaryButton
        onPress={() => navigation.dispatch(StackActions.popToTop())}
        title="go back home"
      />
    </View>
  );
};

export default SettingsScreen;

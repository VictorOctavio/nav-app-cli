import {View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../config/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';

interface Props {}
export const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.wrapper}>
      <PrimaryButton
        title="Products"
        onPress={() => navigation.navigate('Products' as never)}
      />

      <PrimaryButton
        title="Settings"
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};

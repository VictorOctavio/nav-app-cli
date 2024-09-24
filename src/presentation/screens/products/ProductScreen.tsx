import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {globalStyles} from '../../config/theme';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';

export const ProductScreen = () => {
  const {id, name} = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);
  return (
    <View style={globalStyles.wrapper}>
      <Text>ProductScreen {id + ' - ' + name}</Text>
    </View>
  );
};

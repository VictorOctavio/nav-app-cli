import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {globalStyles} from '../../config/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';

interface Product {
  id: string;
  name: string;
}
const products: Product[] = [
  {id: '1', name: 'Product 1'},
  {id: '2', name: 'Product 2'},
  {id: '3', name: 'Product 3'},
  {id: '4', name: 'Product 4'},
  {id: '5', name: 'Product 5'},
];
const ProductsScreen = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={[globalStyles.wrapper]}>
      <Text style={{marginBottom: 20, fontSize: 30}}>ProductsScreen</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() => navigate('Product', item)}
            title={item.name}
          />
        )}
      />

      <Text style={{marginBottom: 10, fontSize: 20}}>Ajustes</Text>
      <PrimaryButton title="ajustes" onPress={() => navigate('Settings')} />
    </View>
  );
};

export default ProductsScreen;

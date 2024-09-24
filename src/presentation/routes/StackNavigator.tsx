/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import ProductsScreen from '../screens/products/ProductsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {colors} from '../config/theme';
import {ProductScreen} from '../screens/products/ProductScreen';

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: {id: string; name: string};
  Profile: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.backgroudColor,
          elevation: 0,
          shadowColor: 'transparent', // Android
          borderBottomWidth: 0, // iOS
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

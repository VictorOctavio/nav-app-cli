import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#7037eb',
  secondary: '#f72585',
  tertiary: '#3a0ca3',
  warning: '#fca311',
  danger: '#e71d36',
  dark: '#22223b',

  backgroudColor: '#f1f1f1',
};

export const globalStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.backgroudColor,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

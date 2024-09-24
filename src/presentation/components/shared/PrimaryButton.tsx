import {Text, Pressable} from 'react-native';
import React from 'react';
import {globalStyles} from '../../config/theme';

interface Props {
  title: string;
  onPress: () => void;
}

export const PrimaryButton: React.FC<Props> = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </Pressable>
  );
};

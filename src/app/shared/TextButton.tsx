import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useState } from 'react';
import { primaryLight } from '@/constants/Colors';

interface FillButtonProps {
  onPress: () => void;
  children: JSX.Element;
  className?: StyleProp<ViewStyle>;
}

const TextButton = ({ onPress, children, className }: FillButtonProps) => {
  const [pressedIn, setPressedIn] = useState(false);
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressedIn(true)}
      onPressOut={() => setPressedIn(false)}
      style={[
        {
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: 2,
          backgroundColor: pressedIn ? primaryLight : 'transparent',
          padding: 15,
          borderRadius: 50,
          paddingStart: 20,
          paddingEnd: 20,
          justifyContent: 'center',
          alignItems: 'center',
        },
        className,
      ]}>
      {children}
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({});

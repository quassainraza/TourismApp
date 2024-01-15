import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { primary } from '@/constants/Colors';

interface FillButtonProps {
  onPress: () => void;
  children: JSX.Element;
  className?: StyleProp<ViewStyle>;
}

const OutlineButton = ({ onPress, children, className }: FillButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          borderColor: primary,
          borderWidth: 2,
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
    </TouchableOpacity>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({});

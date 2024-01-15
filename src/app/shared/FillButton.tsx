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

const FillButton = ({ onPress, children, className }: FillButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: primary,
          borderColor: 'rgba(0,0,0,0)',
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

export default FillButton;

const styles = StyleSheet.create({});

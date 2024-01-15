import { SafeAreaView, StyleSheet } from 'react-native';
import FillButton from './FillButton';
import GlobalStyles from '@/constants/GlobalStyles';

interface FloatingButtonProps {
  onPress: () => void;
  children: JSX.Element;
}

const FloatingButton = ({ children, onPress }: FloatingButtonProps) => {
  return (
    <SafeAreaView
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 20,
      }}>
      <FillButton onPress={onPress} className={GlobalStyles.shadow}>
        {children}
      </FillButton>
    </SafeAreaView>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({});

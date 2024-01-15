import { Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import GlobalStyle from '@/constants/GlobalStyles';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import { Shadow } from 'react-native-shadow-2';
import useTheme from '@/hooks/useTheme';
import { Text } from 'react-native-paper';
interface ItemSlideSmallProps {
  label?: string;
  imageURI: string;
  onPress?: () => void;
  saved?: boolean;
}

const ItemSlideSmall = ({
  label,
  imageURI,
  onPress,
  saved = false,
}: ItemSlideSmallProps) => {
  const theme = useTheme();
  return (
    <Shadow
      distance={10}
      style={{
        backgroundColor: theme === 'dark' ? BG_DARK : BG_LIGHT,
        ...styles.containerItem,
      }}>
      {/* <Image
        source={(imageURI)}
        resizeMode="contain"
        style={{ height: 50 }}
      /> */}
      <Image
        source={require('@assets/images/favicon.png')}
        resizeMode="contain"
        style={{ height: 50 }}></Image>
      <Text style={[{ flex: 1 }, GlobalStyle.padding]}>{label}</Text>
      <MaterialIcons
        name={saved ? 'favorite' : 'favorite-outline'}
        size={20}
        color={BUTTON_LIGHT}
      />
    </Shadow>
  );
};

export default ItemSlideSmall;

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    justifyContent: 'space-between',
    borderRadius: 15,
  },
});

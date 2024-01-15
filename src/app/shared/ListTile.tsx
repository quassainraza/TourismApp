import { StyleSheet, View } from 'react-native';
import GlobalStyle from '@/constants/GlobalStyles';
import { Image } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import useTheme from '@/hooks/useTheme';
import { Text } from 'react-native-paper';
import GlobalStyles from '@/constants/GlobalStyles';

const ListTile = () => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.card,
        GlobalStyles.shadow,
        {
          borderWidth: 1,
          borderColor: theme === 'dark' ? 'white' : 'black',

          backgroundColor: theme === 'dark' ? BG_DARK : BG_LIGHT,
        },
      ]}>
      <View style={{ position: 'relative' }}>
        <Image
          source={require('@assets/images/hotel.jpeg')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={{ padding: 15 }}>
          <View
            style={[
              GlobalStyle.row,
              { justifyContent: 'space-between', marginTop: 5 },
            ]}>
            <View style={[GlobalStyle.row, styles.aspectContainer]}>
              <FontAwesome name="hotel" size={20} color={BUTTON_LIGHT} />
              <Text style={styles.label}>Stays</Text>
            </View>
            <View style={GlobalStyle.row}>
              <AntDesign name="star" size={20} color={BUTTON_LIGHT} />
              <Text style={styles.label}>New</Text>
            </View>
          </View>
          <View style={[GlobalStyle.row, styles.aspectContainer]}>
            <View style={GlobalStyle.row}>
              <Entypo name="location-pin" size={20} color={BUTTON_LIGHT} />
              <Text style={styles.label}>Location</Text>
            </View>
          </View>
          <View
            style={[
              GlobalStyle.row,
              { justifyContent: 'space-between', marginTop: 5 },
            ]}>
            <View style={[GlobalStyle.row, styles.aspectContainer]}>
              <Text style={styles.label}>Listing Title</Text>
            </View>
            <View style={GlobalStyle.row}>
              <Text style={styles.label}>Total Price</Text>
            </View>
          </View>
          <View
            style={[
              GlobalStyle.row,
              {
                justifyContent: 'space-between',
              },
            ]}></View>
        </View>
      </View>
    </View>
  );
};

export default ListTile;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    minHeight: 200,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 20,
    padding: 0,
    margin: '5%',
  },
  image: {
    height: 200,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  label: {
    marginLeft: 5,
  },
  aspectContainer: {
    justifyContent: 'space-between',
    marginTop: 5,
  },
  priceContainer: {
    textAlign: 'center',
    width: '100%',
    fontSize: 17,
  },
});

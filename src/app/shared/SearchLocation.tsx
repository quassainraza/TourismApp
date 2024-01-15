import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import GlobalStyles from '@/constants/GlobalStyles';
import { primaryLight } from '@/constants/Colors';
import { Text } from 'react-native-paper';

const SearchLocation = () => {
  const [pressedIn, setPressedIn] = useState(false);
  return (
    <Pressable
      onPressIn={() => setPressedIn(true)}
      onPressOut={() => setPressedIn(false)}
      style={[
        GlobalStyles.row,
        {
          marginVertical: 5,
          backgroundColor: pressedIn ? primaryLight : 'transparent',
          padding: 10,
          borderRadius: 15,
        },
      ]}>
      <Entypo
        name="location-pin"
        color={'black'}
        size={25}
        style={{
          backgroundColor: 'whitesmoke',
          padding: 10,

          borderRadius: 10,
          overflow: 'hidden',
        }}
      />
      <Text style={{ marginHorizontal: 10, fontSize: 17 }}>Kathmandu</Text>
    </Pressable>
  );
};

export default SearchLocation;

const styles = StyleSheet.create({});

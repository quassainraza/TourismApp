import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import { useState } from 'react';
import GlobalStyle from '@/constants/GlobalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT } from '@/constants/Colors';
import { Shadow } from 'react-native-shadow-2';
import { Text } from 'react-native-paper';
import SearchModal from './modals/SearchModal';
import FilterModal from './modals/FilterModal';
//   import SearchModal from "./modals/SearchModal";
//   import FilterModal from "./modals/FilterModal";

const GRAY = 'rgb(180,180,180)';

const SearchField = () => {
  const [showModalSearch, setShowModalSearch] = useState(false);
  const [showModalFilter, setShowModalFilter] = useState(false);
  const theme = useTheme();
  return (
    <View style={[{ margin: 10 }]}>
      <Shadow
        style={[
          GlobalStyle.row,
          {
            borderWidth: 1,
            borderColor: 'gainsboro',
            borderRadius: 40,
            backgroundColor: theme === 'dark' ? BG_DARK : BG_LIGHT,
          },
        ]}>
        <TouchableOpacity
          style={styles.roundedBorder}
          onPress={() => setShowModalSearch(!showModalSearch)}>
          <AntDesign name="search1" size={20} color={'gray'} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text>Where to?</Text>
          <Text>Any where, Any week</Text>
        </View>
        <TouchableOpacity
          style={styles.roundedBorder}
          onPress={() => setShowModalFilter(!showModalFilter)}>
          <Ionicons name="filter" size={20} color={'gray'} />
        </TouchableOpacity>
      </Shadow>
      <Modal
        visible={showModalSearch}
        transparent={false}
        animationType="slide">
        <SearchModal onPress={() => setShowModalSearch(!showModalSearch)} />
      </Modal>
      <Modal
        visible={showModalFilter}
        transparent={false}
        animationType="slide">
        <FilterModal onPress={() => setShowModalFilter(!showModalFilter)} />
      </Modal>
    </View>
  );

  return (
    <View>
      <View style={GlobalStyle.padding}>
        <View style={[GlobalStyle.row]}>
          <TouchableOpacity
            style={[styles.pill]}
            onPress={() => setShowModalSearch(!showModalSearch)}>
            <AntDesign name="search1" size={19} color={GRAY} />
          </TouchableOpacity>

          <TextInput
            style={[
              styles.pillText,
              styles.pill,
              {
                flex: 1,
                paddingLeft: 20,
                paddingRight: 20,
                paddingEnd: 20,
                paddingStart: 20,
              },
            ]}
            placeholder="Location, Landmarks or Address"
            placeholderTextColor={GRAY}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  pill: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: GRAY,
    justifyContent: 'center',
  },
  pillText: {
    color: 'gray',
    marginLeft: 10,
    marginRight: 10,
    marginEnd: 10,
    marginStart: 10,
    fontSize: 15,
  },
  roundedBorder: {
    borderColor: 'rgb(200,200,200)',
    borderWidth: 1,
    padding: 5,
    margin: 7,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

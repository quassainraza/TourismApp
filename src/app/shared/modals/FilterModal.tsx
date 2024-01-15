import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';

import FloatingButton from '../FloatingButton';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GlobalStyles from '@/constants/GlobalStyles';
import { Text } from 'react-native-paper';
import useTheme from '@/hooks/useTheme';
import { BG_LIGHT, BG_DARK, primary } from '@/constants/Colors';

interface FilterModalProps {
  onPress: () => void;
}

const FilterModal = ({ onPress }: FilterModalProps) => {
  const theme = useTheme();
  const Options = [
    {
      icon: <MaterialIcons name="hotel" size={30} color={'gray'} />,
      label: 'Stays',
    },
    {
      icon: <Ionicons name="tv-outline" size={30} color={'gray'} />,
      label: 'Online Events',
    },
    {
      icon: <Ionicons name="home-outline" size={30} color={'gray'} />,
      label: 'Onsite Events',
    },
  ];
  const [selectedOptions, setSelectedOptions] = useState(0);
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
        height: '100%',
      }}>
      <View style={GlobalStyles.hw100}>
        <ScrollView bounces={false} contentContainerStyle={{ padding: 20 }}>
          <Text style={GlobalStyles.title}>Filters</Text>
          <View
            style={{
              borderWidth: 0.5,
              marginVertical: 10,
              borderColor: 'gray',
            }}
          />
          <Text style={{ paddingLeft: 10 }}>Property Type</Text>
          <View
            style={[
              GlobalStyles.row,
              { marginTop: 5, width: '100%', flexWrap: 'wrap' },
            ]}>
            {Options.map((opt, idx) => {
              return (
                <BoxOptions
                  key={idx}
                  icon={opt.icon}
                  label={opt.label}
                  selected={idx === selectedOptions}
                  onPress={() => {
                    setSelectedOptions(idx);
                  }}
                />
              );
            })}
          </View>
        </ScrollView>

        <FloatingButton onPress={onPress}>
          <Text style={[GlobalStyles.boldText, { color: 'white' }]}>
            Close Filters
          </Text>
        </FloatingButton>
      </View>
    </SafeAreaView>
  );
};

export default FilterModal;

function BoxOptions({
  icon,
  label,
  selected,
  onPress,
}: {
  label: string;
  icon: JSX.Element;
  selected: boolean;
  onPress: () => void;
}) {
  let JSXIcon = {
    ...icon,
    props: {
      ...icon.props,
      color: selected ? primary : 'rgb(150,150,150)',
    },
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: selected ? primary : 'rgb(150,150,150)',
        padding: 10,
        width: '45%',
        margin: '2.5%',
      }}>
      {JSXIcon}
      <Text
        style={{
          marginTop: 10,
          fontSize: 16,
          color: selected ? primary : 'rgb(150,150,150)',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

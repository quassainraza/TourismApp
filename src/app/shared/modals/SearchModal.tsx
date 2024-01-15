import GlobalStyles from '@/constants/GlobalStyles';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import FloatingButton from '../FloatingButton';
import TextFieldRounded from '../TextFieldRounded';
import SearchLocation from '../SearchLocation';
import useTheme from '@/hooks/useTheme';
import { BG_LIGHT, BG_DARK } from '@/constants/Colors';

interface SearchModalProps {
  onPress: () => void;
}

const SearchModal = ({ onPress }: SearchModalProps) => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
        height: '100%',
      }}>
      <View style={GlobalStyles.hw100}>
        <ScrollView bounces={false} contentContainerStyle={{ padding: 20 }}>
          <Text style={GlobalStyles.title}>Search</Text>
          <TextFieldRounded placeholder="Search" />
          <SearchLocation />
          <SearchLocation />
          <SearchLocation />
        </ScrollView>

        <FloatingButton onPress={onPress}>
          <Text style={[GlobalStyles.boldText, { color: 'white' }]}>
            Close Search
          </Text>
        </FloatingButton>
      </View>
    </SafeAreaView>
  );
};

export default SearchModal;

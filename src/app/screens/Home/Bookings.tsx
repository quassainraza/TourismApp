import { SafeAreaView, ScrollView } from 'react-native';
import useTheme from '@/hooks/useTheme';
import {
  BG_DARK,
  BG_LIGHT,
  BUTTON_LIGHT,
  primaryLight,
} from '@/constants/Colors';
import { Text } from 'react-native-paper';
import { View } from '@gluestack-ui/themed';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GlobalStyle from '@/constants/GlobalStyles';
import TabPills from '@/shared/TabPills';

const Bookings = (props: any) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
        height: '100%',
      }}>
      <ScrollView horizontal={false} contentContainerStyle={{ height: '100%' }}>
        <TabPills Tabs={['Active', 'Cancelled', 'History']} />
        <View style={[{ flex: 1 }, GlobalStyle.center, GlobalStyle.padding]}>
          <AntDesign
            name="earth"
            size={70}
            color={theme === 'dark' ? BUTTON_LIGHT : primaryLight}
          />
          <Text style={[GlobalStyle.boldText, { fontSize: 25, marginTop: 20 }]}>
            Your future booking awaits
          </Text>
          <Text style={{ textAlign: 'center' }}>
            Once you have any booking through "Dmt Tourism", it would be shown
            here
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookings;

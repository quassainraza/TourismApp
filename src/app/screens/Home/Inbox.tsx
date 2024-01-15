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
const Inbox = (props: any) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
        height: '100%',
      }}>
      <ScrollView contentContainerStyle={{ minHeight: '100%', padding: 20 }}>
        <View style={[{ flex: 1 }, GlobalStyle.center, GlobalStyle.padding]}>
          <AntDesign
            name="message1"
            size={70}
            color={theme === 'dark' ? BUTTON_LIGHT : primaryLight}
          />
          <Text style={[GlobalStyle.boldText, { fontSize: 25, margin: 20 }]}>
            No messages yet
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 16 }}>
            Only active booking can have messaging access
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Inbox;

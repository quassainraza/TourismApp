import { SafeAreaView, ScrollView } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT } from '@/constants/Colors';
import { View } from '@gluestack-ui/themed';
import SearchField from '@/shared/SearchField';
import TabPills from '@/shared/TabPills';
import ListTile from '@/shared/ListTile';

const Home = (props: any) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
        height: '100%',
      }}>
      <View
        style={[
          {
            backgroundColor: theme === 'dark' ? BG_DARK : BG_LIGHT,
            elevation: 4,
            zIndex: 10,
          },
        ]}>
        <SearchField />
        <TabPills Tabs={['Offers', 'Stays', 'Events']} />
      </View>
      <ScrollView>
        <ListTile />
        <ListTile />
        <ListTile />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

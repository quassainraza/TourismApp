import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT } from '@/constants/Colors';
import { Text } from 'react-native-paper';
import { View } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GlobalStyle from '@/constants/GlobalStyles';
import { Shadow } from 'react-native-shadow-2';
const ProfilePage = (props: any) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
        height: '100%',
      }}>
      <ScrollView contentContainerStyle={{ minHeight: '100%', padding: 20 }}>
        <Text style={[GlobalStyle.title, { marginBottom: 20 }]}>User</Text>
        <TouchableOpacity
          style={[
            GlobalStyle.row,
            {
              borderBottomColor: 'gainsboro',
              borderBottomWidth: 1,
              paddingBottom: 20,
              marginBottom: '5%',
            },
          ]}>
          <MaterialCommunityIcons
            name="account"
            style={{
              padding: 15,
              backgroundColor: 'gray',
              borderRadius: 40,
              overflow: 'hidden',
            }}
            size={50}
            color={'gainsboro'}
          />
          <View style={[GlobalStyle.padding, { flex: 1 }]}>
            <Text style={{ fontSize: 22 }}>Mandeep Dahal</Text>
            <Text style={{ fontSize: 17, color: 'gray' }}>Show Profile</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={40}
            color={'gray'}
          />
        </TouchableOpacity>

        <Shadow
          distance={10}
          style={[
            GlobalStyle.padding,

            {
              marginBottom: '5%',
              borderRadius: 10,
              minWidth: '100%',

              //marginVertical: 20,
              backgroundColor: theme === 'dark' ? BG_DARK : BG_LIGHT,
            },
          ]}>
          <Text style={[GlobalStyle.title]}>Switch to Selling</Text>
          <Text style={GlobalStyle.normalText}>
            Become a seller and start earning
          </Text>
        </Shadow>
        <Text style={[GlobalStyle.boldText, { marginBottom: 20 }]}>
          Settings
        </Text>
        <Option label={'List on DMT'} slug={'welcomeScreen'} />
        <Option label={'Legal'} />
        <Option label={'Privacy Policy'} />
        <Option label={'Terms of Use'} />
      </ScrollView>
    </SafeAreaView>
  );
  function Option({ label, slug }: any) {
    return (
      <TouchableOpacity
        style={[
          GlobalStyle.row,
          {
            borderBottomColor: 'gainsboro',
            borderBottomWidth: 1,
          },
        ]}
        onPress={() => {
          console.log('slug: ', slug);
          if (slug) {
            props.navigation.navigate(slug);
          }
        }}>
        <MaterialCommunityIcons name="home-outline" size={30} color={'gray'} />
        <View style={[GlobalStyle.padding, { flex: 1 }]}>
          <Text style={{ fontSize: 17, color: 'gray' }}>{label}</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={40} color={'gray'} />
      </TouchableOpacity>
    );
  }
};

export default ProfilePage;

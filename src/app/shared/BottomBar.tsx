import { View, Text, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import { BottomTabContext } from '@/contexts/BottomTabContext';
interface Props {
  props: any;
  isDisplayBottomBar?: boolean;
}

const BottomBar = ({ props, isDisplayBottomBar = true }: Props) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useContext(BottomTabContext);
  const size = 60;
  //console.log('props in BottomBar:', props);
  // console.log("active :",activeTab)
  if (!isDisplayBottomBar) {
    return null; // Do not render anything if isDisplayBottomBar is false
  }
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        position: 'absolute',
        flexDirection: 'row',
      }}>
      <View
        style={{
          backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          gap: 20,
          borderTopColor: 'grey',
          borderTopWidth: 1,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (setActiveTab) setActiveTab('Home');
            props.navigation.navigate('Home');
            // console.log("active :",activeTab)
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name={activeTab === 'Home' ? 'home' : 'home-outline'}
            color={BUTTON_LIGHT}
            size={25}
          />
          <Text style={{ color: BUTTON_LIGHT, fontSize: 13 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (setActiveTab) setActiveTab('explore');
            props.navigation.navigate('explore');
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name={activeTab === 'explore' ? 'compass' : 'compass-outline'}
            color={BUTTON_LIGHT}
            size={25}
          />
          <Text style={{ color: BUTTON_LIGHT, fontSize: 13 }}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (setActiveTab) setActiveTab('notifications');
            props.navigation.navigate('notifications');
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name={
              activeTab === 'notifications'
                ? 'notifications'
                : 'notifications-outline'
            }
            color={BUTTON_LIGHT}
            size={25}
          />
          <Text style={{ color: BUTTON_LIGHT, fontSize: 13 }}>
            Notifications
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (setActiveTab) setActiveTab('profile');
            props.navigation.navigate('profile');
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name={activeTab === 'profile' ? 'person' : 'person-outline'}
            color={BUTTON_LIGHT}
            size={25}
          />
          <Text style={{ color: BUTTON_LIGHT, fontSize: 13 }}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;

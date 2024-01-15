import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabContext } from '@/contexts/BottomTabContext';
import Home from '@/screens/Home/Home';
import Bookings from '@/screens/Home/Bookings';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import SearchIcon from 'react-native-vector-icons/Feather';
import WhisListIcon from 'react-native-vector-icons/AntDesign';
import BookingIcon from 'react-native-vector-icons/SimpleLineIcons';
import InboxIcon from 'react-native-vector-icons/Feather';
import UserIcon from 'react-native-vector-icons/SimpleLineIcons';
import useTheme from '@/hooks/useTheme';
import Whishlist from '@/screens/Home/Whishlist';
import Inbox from '@/screens/Home/Inbox';
import ListingStepperFormRouter from './ListingStepperFormRouter';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeRouter = (props: any) => {
  const [activeTab, setActiveTab] = useState('Home');
  const sizeBottomBarIcon = 25;
  const theme = useTheme();
  const returnBarIcon = (name: string, isActive: boolean) => {
    if (name === 'search') {
      return (
        <SearchIcon name={name} color={isActive ? BUTTON_LIGHT : 'grey'} />
      );
    } else if (name === 'hearto') {
      <WhisListIcon name={name} color={isActive ? BUTTON_LIGHT : 'grey'} />;
    } else if (name === 'handbag') {
      <BookingIcon name={name} color={isActive ? BUTTON_LIGHT : 'grey'} />;
    } else if (name === 'inbox') {
      <InboxIcon name={name} color={isActive ? BUTTON_LIGHT : 'grey'} />;
    } else {
      <UserIcon name={name} color={isActive ? BUTTON_LIGHT : 'grey'} />;
    }
  };

  return (
    <BottomTabContext.Provider value={[activeTab, setActiveTab]}>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme === 'dark' ? BG_DARK : BG_LIGHT,
            borderTopColor: theme === 'dark' ? 'white' : 'black',
            borderTopWidth: 0.2,
          },
          headerShown: false,
        }}>
        <Screen
          component={Home}
          name="Home"
          options={{
            // tabBarLabelStyle: { color: BUTTON_LIGHT, fontSize: 13 },
            tabBarActiveTintColor: BUTTON_LIGHT,
            tabBarInactiveTintColor: 'gray',
            tabBarLabel: 'Search',
            tabBarIcon: ({ focused }) => (
              <SearchIcon
                name="search"
                size={20}
                color={focused ? BUTTON_LIGHT : 'grey'}
              />
            ),
          }}
        />
        <Screen
          component={Whishlist}
          name="whishlist"
          options={{
            tabBarActiveTintColor: BUTTON_LIGHT,
            tabBarInactiveTintColor: 'gray',
            tabBarLabel: 'Whishlist',
            tabBarIcon: ({ focused }) => (
              <WhisListIcon
                name="hearto"
                size={20}
                color={focused ? BUTTON_LIGHT : 'grey'}
              />
            ),
          }}
        />
        <Screen
          component={Bookings}
          name="bookings"
          options={{
            tabBarActiveTintColor: BUTTON_LIGHT,
            tabBarInactiveTintColor: 'gray',
            tabBarLabel: 'Bookings',
            tabBarIcon: ({ focused }) => (
              <BookingIcon
                name="handbag"
                size={20}
                color={focused ? BUTTON_LIGHT : 'grey'}
              />
            ),
          }}
        />
        <Screen
          component={Inbox}
          name="inbox"
          options={{
            tabBarActiveTintColor: BUTTON_LIGHT,
            tabBarInactiveTintColor: 'gray',
            tabBarLabel: 'Inbox',
            tabBarIcon: ({ focused }) => (
              <InboxIcon
                name="inbox"
                size={20}
                color={focused ? BUTTON_LIGHT : 'grey'}
              />
            ),
          }}
        />
        <Screen
          component={ListingStepperFormRouter}
          name="settings"
          options={{
            tabBarActiveTintColor: BUTTON_LIGHT,
            tabBarInactiveTintColor: 'gray',
            tabBarLabel: 'User',
            tabBarIcon: ({ focused }) => (
              <UserIcon
                name="user"
                size={20}
                color={focused ? BUTTON_LIGHT : 'grey'}
              />
            ),
          }}
        />
      </Navigator>
    </BottomTabContext.Provider>
  );
};

export default HomeRouter;

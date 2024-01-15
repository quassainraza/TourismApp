import BusinessDetails from '@/screens/Home/ListingStepperForm/BusinessDetails';
import ListingDetail from '@/screens/Home/ListingStepperForm/ListingDetail';
import ListingPhotos from '@/screens/Home/ListingStepperForm/ListingPhotos';
import LocationDetails from '@/screens/Home/ListingStepperForm/LocationDetails';
import RoomsInformation from '@/screens/Home/ListingStepperForm/RoomsInformation';
import WelcomeScreen from '@/screens/Home/ListingStepperForm/WelcomScreen';
import ProfilePage from '@/screens/Home/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';

const { Navigator, Screen } = createNativeStackNavigator();

const { height } = Dimensions.get('screen');

const ListingStepperFormRouter = () => {
  return (
    <Navigator>
      <Screen
        name="profile"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
      <Screen
        options={{ title: 'Welcome Screen' }}
        name="welcomeScreen"
        component={WelcomeScreen}
      />
      <Screen
        options={{ title: 'Location Details' }}
        name="locationDetails"
        key={'locationDetails'}
        component={LocationDetails}
      />
      <Screen
        options={{ title: '' }}
        name="businessDetails"
        component={BusinessDetails}
      />
      <Screen
        options={{ title: '' }}
        name="listingDetails"
        component={ListingDetail}
      />

      <Screen
        options={{ title: '' }}
        name="roomInformation"
        component={RoomsInformation}
      />
      <Screen
        options={{ title: '' }}
        name="listingPhotos"
        component={ListingPhotos}
      />
    </Navigator>
  );
};
export default ListingStepperFormRouter;

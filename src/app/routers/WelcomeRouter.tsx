import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '@/screens/welcome/Splash';
import Login from '@/screens/welcome/Login';
import HomeRouter from './HomeRouter';
import RegisterOptions from '@/screens/welcome/RegistrationOptions';
import Register from '@/screens/welcome/Registeration';

const { Navigator, Screen } = createNativeStackNavigator();

const WelcomeRouter = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen component={Splash} name="splash" />
      <Screen component={RegisterOptions} name="registerOptions" />
      <Screen component={Register} name="register" />
      <Screen component={Login} name="login" />
      <Screen component={HomeRouter} name="homeRouter" />
      {/* <Screen component={EnterCode} name="enterCode" />
      <Screen component={AccountType} name="accountType" />
      <Screen component={AccountDetailsInsert} name="accountDetailsInsert" />
      <Screen component={CreatePinCode} name="createPinCode" />
      <Screen component={HomeRouter} name="homeRouter" /> */}
    </Navigator>
  );
};

export default WelcomeRouter;

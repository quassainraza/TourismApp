import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GlobalStyles from '@/constants/GlobalStyles';
import FillButton from '@/shared/FillButton';
import OutlineButton from '@/shared/OutlineButton';
import TextButton from '@/shared/TextButton';
import { primary } from '@/constants/Colors';

const RegisterOptions = (props: any) => {
  return (
    <SafeAreaView>
      <Image
        source={require('@assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View
        style={[GlobalStyles.hw100, GlobalStyles.center, GlobalStyles.padding]}>
        <FillButton onPress={() => {}} className={{ width: '100%' }}>
          <Text style={[GlobalStyles.boldText, { color: 'white' }]}>
            Continue with Google
          </Text>
        </FillButton>
        <View style={{ height: 10 }} />
        <OutlineButton
          onPress={() => {
            props.navigation.navigate('register');
          }}
          className={{ width: '100%' }}>
          <Text style={[GlobalStyles.boldText, { color: primary }]}>
            Create Account
          </Text>
        </OutlineButton>
        <View style={{ height: 10 }} />
        <TextButton
          onPress={() => {
            props.navigation.navigate('login');
          }}
          className={{ width: '100%' }}>
          <Text style={[GlobalStyles.boldText, { color: primary }]}>
            Log In
          </Text>
        </TextButton>
        <View style={{ height: 30 }} />
        <Text style={{ color: 'gray' }}>
          By selecting “Log in” or “Create account”, you confirm to agree with
          ‘Digital Marketplace for Tourism” Terms of Use and Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterOptions;

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
});

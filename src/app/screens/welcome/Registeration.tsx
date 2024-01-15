import { ScrollView, StyleSheet, Text, View } from 'react-native';
import GlobalStyles from '@/constants/GlobalStyles';
import TextField from '@/shared/TextField';
import FillButton from '@/shared/FillButton';
import OutlineButton from '@/shared/OutlineButton';
import { primary } from '@/constants/Colors';

const Register = (props: any) => {
  return (
    <View style={[GlobalStyles.padding, { paddingTop: 0 }]}>
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
        <View style={{ height: 10 }} />
        <Text style={GlobalStyles.title}>Register</Text>
        <View style={{ height: 10 }} />
        <TextField placeholder="First Name" />
        <TextField placeholder="Last Name" />
        <TextField placeholder="Phone Number" />
        <TextField placeholder="Email" />
        <TextField placeholder="Password" secureTextEntry />
        <TextField placeholder="Verify Password" secureTextEntry />
        <View style={{ height: 30 }} />
        <FillButton
          onPress={() => {
            props.navigation.navigate('homeRouter');
          }}>
          <Text style={[GlobalStyles.boldText, { color: 'white' }]}>
            Sign up
          </Text>
        </FillButton>
        <View style={{ height: 10 }} />
        <OutlineButton
          onPress={() => {
            props.navigation.navigate('login');
          }}
          className={{ width: '100%' }}>
          <Text style={[GlobalStyles.boldText, { color: primary }]}>Login</Text>
        </OutlineButton>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});

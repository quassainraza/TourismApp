import { StyleSheet, Text, View } from 'react-native';
import GlobalStyles from '@/constants/GlobalStyles';
import TextField from '@/shared/TextField';
import FillButton from '@/shared/FillButton';
import OutlineButton from '@/shared/OutlineButton';
import { primary } from '@/constants/Colors';

const Login = (props: any) => {
  return (
    <View style={GlobalStyles.padding}>
      <Text style={GlobalStyles.title}>Login</Text>
      <View style={{ height: 10 }} />
      <TextField placeholder="Email" />
      <TextField placeholder="Password" secureTextEntry />
      <View style={{ height: 30 }} />
      <FillButton
        onPress={() => {
          props.navigation.navigate('homeRouter');
        }}>
        <Text style={[GlobalStyles.boldText, { color: 'white' }]}>Login</Text>
      </FillButton>
      <View style={{ height: 10 }} />
      <OutlineButton
        onPress={() => {
          props.navigation.navigate('register');
        }}
        className={{ width: '100%' }}>
        <Text style={[GlobalStyles.boldText, { color: primary }]}>
          Register
        </Text>
      </OutlineButton>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});

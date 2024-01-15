import GlobalStyles from '@/constants/GlobalStyles';
import FillButton from '@/shared/FillButton';
import { StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View
      style={[
        GlobalStyles.padding,
        { justifyContent: 'center', height: '100%' },
      ]}>
      <Text style={[GlobalStyles.title, GlobalStyles.bold]}>
        Greetings from Digital Marketplace for Tourism Branded as DMT
      </Text>
      <Text style={[{ marginVertical: 20 }]}>
        We welcome all the individuals and businesses to our tourism marketplace
        platform. Here, you can list Accommodation property and Experience
        offering based in Africa and Asia. Focused on tourism niche and regional
        specific services, the sellers will be able to take great advantage
        among buyers around the world. We wish everyone who is connected with
        DMT for the prosperity of this community and help boost business
        operations around the region. May we all prosper
      </Text>
      <View style={{ flex: 1 }} />
      <FillButton
        onPress={() => {
          navigation.navigate('locationDetails');
        }}>
        <Text style={{ color: 'white' }}>Let's get Started</Text>
      </FillButton>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});

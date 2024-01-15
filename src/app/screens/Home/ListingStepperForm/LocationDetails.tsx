import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { Actionsheet, useDisclose } from 'native-base';
import GlobalStyles from '@/constants/GlobalStyles';
import FillButton from '@/shared/FillButton';

const LocationDetails = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [region, setRegion] = useState('');
  return (
    <SafeAreaView>
      <View style={[GlobalStyles.padding, { height: '95%' }]}>
        <Text style={{ padding: 7, color: 'black' }}>Listing Address</Text>
        <TextInput
          multiline
          placeholder="Enter you listing address"
          placeholderTextColor={'gray'}
          style={{
            backgroundColor: 'gainsboro',
            padding: 15,
            height: 100,
            paddingTop: 15,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'rgb(170,170,170)',
            marginBottom: 20,
          }}
        />
        <View style={{ flex: 1 }} />
        <FillButton onPress={onOpen}>
          <Text style={{ color: 'white' }}>
            {region ? region : 'Select Region'}
          </Text>
        </FillButton>
        <View style={{ height: 10 }} />
        <FillButton
          onPress={() => {
            props.navigation.navigate('businessDetails');
          }}>
          <Text style={{ color: 'white' }}>Next</Text>
        </FillButton>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Actionsheet.Item onPress={() => setRegion('Asia')}>
              Asia
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => setRegion('Africa')}>
              Africa
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => setRegion('Europe')} isDisabled>
              Europe
            </Actionsheet.Item>
            <Actionsheet.Item
              onPress={() => setRegion('North America')}
              isDisabled>
              North America
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => setRegion('Oceana')} isDisabled>
              Oceana
            </Actionsheet.Item>
            <Actionsheet.Item
              onPress={() => setRegion('South America')}
              isDisabled>
              South America
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </View>
    </SafeAreaView>
  );
};

export default LocationDetails;

const styles = StyleSheet.create({});

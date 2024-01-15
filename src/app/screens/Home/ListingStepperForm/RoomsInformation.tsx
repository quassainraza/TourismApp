import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import { Actionsheet, useDisclose } from 'native-base';
import { AccomodationType } from '../../../types/ListingType';
import GlobalStyles from '@/constants/GlobalStyles';
import FillButton from '@/shared/FillButton';

const RoomsInformation = () => {
  const { onToggle, isOpen, onClose } = useDisclose();
  const [accomodationType, setAccomodationType] = useState('');
  const [currency, setCurrency] = useState('');
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ minHeight: '90%' }}>
        <View style={GlobalStyles.padding}>
          <Text style={GlobalStyles.title}>Room Information</Text>
          <Text style={{ marginVertical: 10 }}>
            Let guests know more about the service.
          </Text>
          <FillButton onPress={onToggle}>
            <Text style={{ color: 'white' }}>
              {accomodationType ? accomodationType : 'Select Accomodation Type'}
            </Text>
          </FillButton>

          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
              {AccomodationType.map((accomodation, idx) => (
                <Actionsheet.Item
                  key={idx}
                  onPress={() => setAccomodationType(accomodation)}>
                  <Text>
                    {accomodation === accomodationType && '✓'} {accomodation}
                  </Text>
                </Actionsheet.Item>
              ))}
            </Actionsheet.Content>
          </Actionsheet>
          <View style={{ height: 10 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RoomsInformation;

const styles = StyleSheet.create({});

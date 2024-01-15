import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import GlobalStyles from '@/constants/GlobalStyles';
import TextField from '@/shared/TextField';
import FillButton from '@/shared/FillButton';
import { BusinessInformation } from '@/types/BusinessInformation';
import { ListingType, ExperienceType } from '@/types/ListingType';
import CheckBox from '@/shared/CheckBox';

const BusinessDetails = (props: any) => {
  const [businessNature, setBusinessNature] = useState(
    BusinessInformation.INDIVIDUAL,
  );
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [individualTaxFileNumber, setIndividualTaxFileNumber] = useState('');
  const [companyRegisterationNumber, setCompanyRegisterationNumber] =
    useState('');
  const [companyTaxFileNumber, setCompanyTaxFileNumber] = useState('');
  const [lisitingType, setLisitingType] = useState(ListingType.ACCOMODATION);
  const [experienceType, setExperienceType] = useState(ExperienceType.ONLINE);
  return (
    <ScrollView>
      <View style={GlobalStyles.padding}>
        <Text style={GlobalStyles.title}>Business Nature</Text>
        <Text>
          Please provide accurate business details. Failing to comply might
          result in suspension of your listing.
        </Text>
        <View style={{ height: 10 }} />
        <Text style={[GlobalStyles.normalText, { marginBottom: 10 }]}>
          Are you an Individual or an incorporated business?
        </Text>
        <CheckBox
          label="Individual"
          checked={businessNature === BusinessInformation.INDIVIDUAL}
          onClick={() => setBusinessNature(BusinessInformation.INDIVIDUAL)}
        />
        <CheckBox
          label="Incorporated"
          checked={businessNature === BusinessInformation.INCORPORATED}
          onClick={() => setBusinessNature(BusinessInformation.INCORPORATED)}
        />
        {businessNature === BusinessInformation.INDIVIDUAL && (
          <>
            <TextField
              placeholder="Identification Number"
              state={identificationNumber}
              stateChangeHandler={setIdentificationNumber}
            />
            <TextField
              placeholder="Individual Tax file Number"
              state={individualTaxFileNumber}
              stateChangeHandler={setIndividualTaxFileNumber}
            />
          </>
        )}
        {businessNature === BusinessInformation.INCORPORATED && (
          <>
            <TextField
              placeholder="Company Registeration Number"
              state={companyRegisterationNumber}
              stateChangeHandler={setCompanyRegisterationNumber}
            />
            <TextField
              placeholder="Company Tax file Number"
              state={companyTaxFileNumber}
              stateChangeHandler={setCompanyTaxFileNumber}
            />
          </>
        )}
        <View style={{ height: 10 }} />
        <Text style={[GlobalStyles.normalText, { marginBottom: 10 }]}>
          Is it a Property or a Service?
        </Text>
        <CheckBox
          label="Accomodation"
          checked={lisitingType === ListingType.ACCOMODATION}
          onClick={() => setLisitingType(ListingType.ACCOMODATION)}
        />
        <CheckBox
          label="Experience"
          checked={lisitingType === ListingType.EXPERIENCE}
          onClick={() => setLisitingType(ListingType.EXPERIENCE)}
        />
        {lisitingType === ListingType.EXPERIENCE && (
          <View style={{ paddingHorizontal: 25 }}>
            <CheckBox
              label="Online"
              checked={experienceType === ExperienceType.ONLINE}
              onClick={() => setExperienceType(ExperienceType.ONLINE)}
            />
            <CheckBox
              label="Onsite"
              checked={experienceType === ExperienceType.ONSITE}
              onClick={() => setExperienceType(ExperienceType.ONSITE)}
            />
          </View>
        )}
        <View style={{ height: 30 }} />
        <FillButton
          onPress={() => {
            props.navigation.navigate('listingDetails');
          }}>
          <Text style={{ color: 'white' }}>Next</Text>
        </FillButton>
      </View>
    </ScrollView>
  );
};

export default BusinessDetails;

const styles = StyleSheet.create({});

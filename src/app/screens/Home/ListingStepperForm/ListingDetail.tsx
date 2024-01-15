import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useState } from 'react';

import { Actionsheet, useDisclose } from 'native-base';
import GlobalStyles from '@/constants/GlobalStyles';
import TextFieldRounded from '@/shared/TextFieldRounded';
import FillButton from '@/shared/FillButton';
import { AmenityList } from '@/developer/Amenities';

const ListingDetail = (props: any) => {
  const [listingName, setListingName] = useState('');
  const { isOpen, onOpen, onClose } = useDisclose();
  const [amenities, setAmenities] = useState<string[]>([]);

  const amentiesSelectionHandler = (amenity: string) => {
    if (amenities.includes(amenity)) {
      setAmenities([...amenities.filter(a => a !== amenity)]);
    } else {
      setAmenities([...amenities, amenity]);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ minHeight: '90%' }}>
        <View style={GlobalStyles.padding}>
          <Text style={GlobalStyles.title}>What is your experience called</Text>
          <View style={{ height: 10 }} />
          <Text>
            This shows up in searches and at the top of your Experience. Try to
            write a brief line that hints at the type of space and where it is.
            Example: Romantic Spanish villa w/hot tub — 5 min from the beach!
          </Text>
          <TextFieldRounded
            state={listingName}
            stateChangeHandler={setListingName}
            placeholder="Listing Name"
          />
          <View style={{ height: 10 }} />

          <Text style={GlobalStyles.title}>Experience Hightlights</Text>
          <View style={{ height: 10 }} />
          <Text>
            Tell guests more about your space in your own words. Try to help
            them imagine what a stay might be like at your property.
          </Text>
          <View style={{ height: 20 }} />
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

          <FillButton onPress={onOpen}>
            <Text style={{ color: 'white' }}>{'Amenities'}</Text>
          </FillButton>
          <View style={{ height: 10 }} />
          <FillButton
            onPress={() => {
              props.navigation.navigate('roomInformation');
            }}>
            <Text style={{ color: 'white' }}>Next</Text>
          </FillButton>
          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
              {
                <FlatList
                  style={{ width: '100%' }}
                  data={AmenityList}
                  renderItem={({ item }) => (
                    <Actionsheet.Item
                      key={item}
                      onPress={() => amentiesSelectionHandler(item)}>
                      <Text>
                        {amenities.includes(item) && '✓  '} {item}
                      </Text>
                    </Actionsheet.Item>
                  )}
                />
              }
            </Actionsheet.Content>
          </Actionsheet>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListingDetail;

const styles = StyleSheet.create({});

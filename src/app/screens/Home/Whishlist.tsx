import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import { Text } from 'react-native-paper';
import { View } from '@gluestack-ui/themed';
import { APP_MAX_WIDTH } from '@/constants/Theme';
import { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GlobalStyle from '@/constants/GlobalStyles';
import ItemSlideSmall from '@/shared/ItemSlideSmall';
const Whishlist = (props: any) => {
  const theme = useTheme();

  const [savedListings, setSavedListings] = useState([]);
  // const [isOnline, setIsOnline] = useState(true); // State to manage the online/offline toggle
  // const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  // const handleToggleSwitch = () => {
  //   setIsOnline(prevIsOnline => !prevIsOnline);
  // };
  // const onSelectSwitch = (index: string) => {
  //   console.log('Selected index: ' + index);
  // };

  // const dates = ['Today', 'Tomorrow', 'This Week', 'Next Week', 'Next Month'];

  // const handleDateFilter = (filter: string) => {
  //   // Toggle the selected state of the filter
  //   const updatedFilters = selectedFilters.includes(filter)
  //     ? selectedFilters.filter(selectedFilter => selectedFilter !== filter)
  //     : [...selectedFilters, filter];

  //   setSelectedFilters(updatedFilters);
  // };
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
        height: '100%',
      }}>
      {savedListings.length ? (
        <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
          <Text>Featured</Text>
        </ScrollView>
      ) : (
        <View
          style={[
            GlobalStyle.padding,
            {
              backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
              height: '100%',
            },
          ]}>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <AntDesign name="bars" size={70} color={BUTTON_LIGHT} />
            <Text
              style={[
                GlobalStyle.boldText,
                {
                  fontSize: 25,
                  marginTop: 5,
                  marginBottom: 5,
                  textAlign: 'center',
                },
              ]}>
              Future bookings wishlist
            </Text>
            <Text style={{ textAlign: 'center' }}>
              Save favourite stays and events that you find interesting from
              your search
            </Text>
          </View>
          <Text style={[GlobalStyle.padding, GlobalStyle.boldText]}>
            Let's then explore your first list
          </Text>
          <ItemSlideSmall
            label="Community's top wishlist around Africa and Asia"
            imageURI={'@assets/images/favicon.png'}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Whishlist;

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: '100%',
    minWidth: '100%',
    maxWidth: APP_MAX_WIDTH,
    flexDirection: 'column',
  },
});
{
  /* <View style={styles.mainContainer}>
       <Text style={{ marginTop: '5%', alignSelf: 'center', fontSize: 20 }}>
         {' '}
         Whishlist
       </Text>
       <View style={{ marginTop: '5%', alignSelf: 'center' }}>

         <CustomSwitch
           selectionMode={1}
           roundCorner={true}
           option1={'Onsite'}
           option2={'Online'}
           onSelectSwitch={onSelectSwitch}
           selectionColor={BUTTON_LIGHT}
         />
       </View>
       <Text
         style={{
           marginTop: '5%',
           alignSelf: 'flex-start',
           flexWrap: 'wrap',
           marginHorizontal: '5%',
           gap: 5,

           fontSize: 20,
         }}>
         {' '}
         Discoverd Events by dates
       </Text>

       <View
         style={{
           flexDirection: 'row',
           marginTop: '2%',
           alignSelf: 'center',
           flexWrap: 'wrap',
           justifyContent: 'flex-start',
           gap: 5,
           marginHorizontal: '5%',
         }}>
         {dates.map((filter, index) => (
           <Button
             key={index}
             mode="outlined"
             textColor={
               selectedFilters.includes(filter)
                 ? 'white'
                 : theme === 'dark'
                 ? 'white'
                 : 'black'
             }
             onPress={() => handleDateFilter(filter)}
             style={{
               borderColor: selectedFilters.includes(filter)
                 ? 'black'
                 : BUTTON_LIGHT,
               backgroundColor: selectedFilters.includes(filter)
                 ? BUTTON_LIGHT
                 : 'transparent',
             }}>
             {filter}
           </Button>
         ))}
       </View>
     </View>
           */
}

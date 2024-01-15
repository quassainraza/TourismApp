import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState } from 'react';
import { BUTTON_LIGHT, primaryLight } from '@/constants/Colors';

const { width } = Dimensions.get('screen');

interface TabPillsProps {
  Tabs?: string[];
}

const TabPills = ({ Tabs }: TabPillsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Tabs &&
          Tabs?.map((tab, idx) => (
            <Pill
              key={idx}
              label={tab}
              onPress={() => {
                setSelectedTab(idx);
              }}
              active={idx === selectedTab}
            />
          ))}
      </ScrollView>
    </View>
  );
};

function Pill({
  label,
  active,
  onPress,
}: {
  label?: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <View style={[styles.pill]}>
      <Pressable onPress={onPress}>
        <Text
          style={[
            styles.pillInside,
            active && { backgroundColor: primaryLight },
          ]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

export default TabPills;

const styles = StyleSheet.create({
  pill: {
    width: width / 3,
    padding: 10,
  },
  pillInside: {
    borderColor: BUTTON_LIGHT,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    color: BUTTON_LIGHT,
    fontSize: 16,
    fontWeight: '500',
    overflow: 'hidden',
  },
});

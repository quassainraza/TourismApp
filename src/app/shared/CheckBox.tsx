import { primary } from '@/constants/Colors';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  label?: string;
  onClick?: () => void;
  checked?: boolean;
}

const CheckBox = ({ label, onClick, checked = false }: Props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={onClick}
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 20,
            width: 20,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {checked && (
            <View
              style={{
                height: 12,
                width: 12,
                backgroundColor: primary,
                borderRadius: 7,
              }}
            />
          )}
        </View>
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckBox;

import {
  KeyboardType,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

interface TextFieldProps {
  placeholder?: string;
  label?: string;
  state?: any;
  stateChangeHandler?: React.Dispatch<React.SetStateAction<any>>;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
}

const TextField = ({
  label,
  placeholder,
  state,
  stateChangeHandler,
  keyboardType,
  secureTextEntry = false,
}: TextFieldProps) => {
  const [showText, setShowText] = useState(secureTextEntry);

  return (
    <View style={{ position: 'relative', marginTop: 30 }}>
      {label && <Text style={{ margin: 5 }}>{label}</Text>}
      <TextInput
        style={[styles.textField, secureTextEntry && { paddingEnd: 60 }]}
        clearButtonMode={!secureTextEntry ? 'always' : 'never'}
        placeholderTextColor="gray"
        placeholder={placeholder}
        value={state}
        onChangeText={e => {
          if (stateChangeHandler) {
            stateChangeHandler(e);
          }
        }}
        secureTextEntry={showText}
        keyboardType={keyboardType}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowText(!showText)}>
          <Text>{!showText ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  textField: {
    borderBottomColor: 'gray',
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 17,
    padding: 10,
    color: 'black',
  },
  button: {
    position: 'absolute',
    right: 5,
    height: '100%',
    bottom: 0,
    justifyContent: 'center',
  },
});

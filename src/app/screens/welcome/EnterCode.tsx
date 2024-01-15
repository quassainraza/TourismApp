import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import useTheme from '@/hooks/useTheme';
import {
  BG_DARK,
  BG_LIGHT,
  BUTTON_DARK,
  BUTTON_LIGHT,
} from '@/constants/Colors';
import MainLogo from '@assets/svgs/verificationCode.svg';
import { Button, TextInput } from 'react-native-paper';
import { APP_MAX_WIDTH } from '@/constants/Theme';

const EnterCode = (props: any) => {
  const theme = useTheme();
  const COUNTER = 49;

  const [counter, setCounter] = useState(COUNTER);

  const onPressContinue = () => {
    props.navigation.navigate('accountType');
  };
  const onPressResendCode = () => {
    setCounter(COUNTER);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter - 1 < 0) {
        clearInterval(interval);
      } else {
        setCounter(counter - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <View style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
      <View style={[styles.container]}>
        <View style={styles.center}>
          <Text
            style={[
              styles.header,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            Enter Code
          </Text>
          <Text
            style={[
              styles.subHead,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            Enter the 4-digit verification sent to {'\n'}
            {props.route.params?.cCode ?? ''}{' '}
            {props.route.params?.phoneNumber ?? ''}
          </Text>
        </View>
        <MainLogo />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            gap: 20,
          }}>
          <TextInput
            outlineColor={BUTTON_LIGHT}
            activeOutlineColor={BUTTON_DARK}
            textAlign="center"
            style={{ flex: 1 }}
            contentStyle={{ textAlign: 'center' }}
            maxLength={6}
            label={'Enter OTP'}
            mode="outlined"
          />
        </View>
        {counter !== 0 && (
          <Text
            style={[
              styles.subHead,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            Resend code in{' '}
            <Text style={{ color: BUTTON_LIGHT, fontWeight: 'bold' }}>
              {counter}
            </Text>{' '}
            seconds
          </Text>
        )}
        <View style={styles.center}>
          {counter === 0 && (
            <View style={{ flexDirection: 'row' }}>
              <Button
                mode="outlined"
                onPress={onPressResendCode}
                style={styles.button}
                textColor={BUTTON_LIGHT}
                labelStyle={{ padding: 5 }}>
                Resend Code
              </Button>
            </View>
          )}
          <View style={{ flexDirection: 'row' }}>
            <Button
              mode="elevated"
              onPress={onPressContinue}
              textColor="white"
              style={styles.button}
              labelStyle={{ padding: 5 }}
              buttonColor={BUTTON_LIGHT}>
              CONTINUE
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EnterCode;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    gap: 50,
    alignSelf: 'center',
    maxWidth: APP_MAX_WIDTH,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
  },
  subHead: {
    fontSize: 13,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    borderRadius: 5,
  },
  flagItem: {
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gainsboro',
  },
});

import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  password: string;
}

const PasswordStrengthIndicator = ({ password }: Props) => {
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    setStrength(calculatePasswordStrength(password));
  }, [password]);

  const renderPills = () => {
    const pills = [];
    const maxStrength = 5; // Assuming strength is on a scale of 0 to 5

    for (let i = 0; i < maxStrength; i++) {
      const isActive = i < strength;
      pills.push(
        <View
          key={i}
          style={[
            styles.pill,
            isActive ? styles.activePill : styles.inactivePill,
          ]}
        />,
      );
    }

    return pills;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Password Strength</Text>
      <View style={styles.pillsContainer}>{renderPills()}</View>
    </View>
  );
};

const calculatePasswordStrength = (password: string) => {
  // Implement your password strength calculation logic here
  // You can use the example from the previous response and adjust it as needed
  // ...

  // For this example, we assume a simple strength calculation
  const minLength = 8;
  return password.length >= minLength
    ? Math.min(Math.ceil(password.length / 2), 5)
    : 0;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 5,
  },
  pillsContainer: {
    flexDirection: 'row',
  },
  pill: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  activePill: {
    backgroundColor: 'green', // Change the color for active pills
  },
  inactivePill: {
    backgroundColor: 'white', // Change the color for inactive pills
  },
});

export default PasswordStrengthIndicator;

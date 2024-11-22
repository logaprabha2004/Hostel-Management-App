import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Confirmed!</Text>
      <Text style={styles.subtitle}>Thank you for booking your room.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ConfirmationScreen;

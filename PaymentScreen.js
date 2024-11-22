import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>
      <TextInput placeholder="Card Number" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Expiry Date" style={styles.input} />
      <TextInput placeholder="CVV" style={styles.input} secureTextEntry keyboardType="numeric" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Confirmation')}>
        <Text style={styles.buttonText}>Confirm Payment</Text>
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
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
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

export default PaymentScreen;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RoomAllocationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Room</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payment')}>
        <Text style={styles.buttonText}>Proceed to Payment</Text>
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

export default RoomAllocationScreen;

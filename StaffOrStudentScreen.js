import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StaffOrStudentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you a Staff or a Student?</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Auth', { isSignIn: true })}>
        <Text style={styles.buttonText}>STAFF</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Auth', { isSignIn: true })}>
        <Text style={styles.buttonText}>STUDENTS</Text>
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
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default StaffOrStudentScreen;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.campusoption.com/images/colleges/gallery/01_02_17_110415_2.jpg' }}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to the Hostel Management App</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StaffOrStudent')}>
        <Text style={styles.buttonText}>Get Started</Text>
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default HomeScreen;

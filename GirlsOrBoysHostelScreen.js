// screens/GirlsOrBoysHostelScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GirlsOrBoysHostelScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Hostel</Text>
      
      <Button
        title="Girls Hostel"
        onPress={() => navigation.navigate('StaffOrStudentScreen', { hostel: 'Girls' })}
      />
      
      <Button
        title="Boys Hostel"
        onPress={() => navigation.navigate('StaffOrStudentScreen', { hostel: 'Boys' })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default GirlsOrBoysHostelScreen;

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AuthScreen = ({ route, navigation }) => {
  const { isSignIn } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignIn ? 'Sign In' : 'Sign Up'}</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      {!isSignIn && <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry />}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BottomTabs')}>
        <Text style={styles.buttonText}>{isSignIn ? 'Sign In' : 'Sign Up'}</Text>
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

export default AuthScreen;

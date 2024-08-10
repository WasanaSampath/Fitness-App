import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SigninScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Hi! Welcome back, You've been missed.</Text>

      <Text>Email</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="example@gmail.com"
          style={styles.input}
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <Text>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="***********"
          placeholderTextColor="#666"
          secureTextEntry={!passwordVisible}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Ionicons
            name={passwordVisible ? "eye-outline" : "eye-off-outline"}
            size={24}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or sign in with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity>
          <Image source={require('./apple-logo.png')} style={styles.socialButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./google-logo.png')} style={styles.socialButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./facebook-logo.png')} style={styles.socialButton} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signInText}>Don't have an account? <Text style={styles.link}>Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    paddingRight: 40,
    backgroundColor: "white",
    borderRadius: 5,
  },
  eyeIconContainer: {
    position: "absolute",
    right: 10,
    padding: 10,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 45,
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  orText: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginHorizontal: 10,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  signInText: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  link: {
    color: "blue",
    textDecorationLine: 'underline',
  }
});

export default SigninScreen;

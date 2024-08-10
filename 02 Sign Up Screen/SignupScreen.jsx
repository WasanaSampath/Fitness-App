import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Picker,
  CheckBox,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignupScreen = () => {
  const navigation = useNavigation();

  const [selectedInstituteType, setSelectedInstituteType] = React.useState("Select");
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Fill your information below or register with your social account.</Text>
      <Text>Email</Text>
      <TextInput
        placeholder="example@gmail.com"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#666" // Placeholder color
      />
      <Text>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="********"
          placeholderTextColor="#666" // Placeholder color
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <Icon name={showPassword ? "eye" : "eye-slash"} size={20} color="#666" />
        </TouchableOpacity>
      </View>
      <Text>Institute type</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedInstituteType}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedInstituteType(itemValue)}
        >
          <Picker.Item label="" value=" " />
          <Picker.Item label="School" value="school" />
          <Picker.Item label="College" value="college" />
          <Picker.Item label="University" value="university" />
        </Picker>
        {selectedInstituteType === "Select" && (
          <Text style={styles.placeholder}>Select</Text>
        )}
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={termsAccepted}
          onValueChange={setTermsAccepted}
          style={styles.checkbox}
        />
        <Text style={styles.checkboxLabel}>
          Agree with <TouchableOpacity style={styles.link}>Terms & condition</TouchableOpacity>
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or sign up with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity>
          <Image source={require('./apple-logo.png')} style={styles.socialButton} /> {/* Replace with correct path */}
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./google-logo.png')} style={styles.socialButton} /> {/* Replace with correct path */}
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./facebook-logo.png')} style={styles.socialButton} /> {/* Replace with correct path */}
        </TouchableOpacity>
      </View>

      <Text style={styles.centeredText}>
        Already have an account?
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
      </Text>
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
  centeredText: {
    textAlign: 'center',
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 15,
  },
  pickerContainer: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  borderRadius: 10,  },
  placeholder: {
    position: 'absolute',
    top: 15,
    left: 10,
    color: '#666',
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  link: {
    color: "blue",
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
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
    marginHorizontal: 10,
    color: "#666",
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
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default SignupScreen;

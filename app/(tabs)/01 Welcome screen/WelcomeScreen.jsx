import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('./img.avif')} // Replace with the correct path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.whiteSection}>
          <Text style={styles.title}>
            Activity based <Text style={styles.blackText}>Center's Clients Automate App</Text>
          </Text>
          <Text style={styles.subtitle}>
            Transform your fitness or habits related activity business with our intuitive client management app.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Let’s get started</Text>
          </TouchableOpacity>
          <View style={styles.signInContainer}>
            <Text style={styles.blackText}>Have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.link}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  whiteSection: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: '#007bff', // Blue color as in the image
    marginBottom: 10,
  },
  blackText: {
    color: '#000', // Black color for specific text
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: '#333', // Darker color for the subtitle
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007bff", // Blue color for the button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  link: {
    color: "#007bff", // Blue color for the link
    fontSize: 14,
    textDecorationLine: 'underline', // Underline for the link
  },
});

export default WelcomeScreen;

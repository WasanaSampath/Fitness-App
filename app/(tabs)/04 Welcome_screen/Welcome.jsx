import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("./welcome.avif")} // Replace with the correct path to your image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Registration completed!</Text>
          <Text style={styles.subtitle}>You should follow these steps first.</Text>

          <View style={styles.stepsContainer}>
            <View style={styles.stepItem}>
              <Text style={styles.stepNumber}>1</Text>
              <Text style={styles.stepText}>Create client groups</Text>
            </View>
            <View style={styles.stepItem}>
              <Text style={styles.stepNumber}>2</Text>
              <Text style={styles.stepText}>Create client payment packages</Text>
            </View>
            <View style={styles.stepItem}>
              <Text style={styles.stepNumber}>3</Text>
              <Text style={styles.stepText}>Create staff</Text>
            </View>
            <View style={styles.stepItem}>
              <Text style={styles.stepNumber}>4</Text>
              <Text style={styles.stepText}>Create clients</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.videoButton}>
            <Text style={styles.videoButtonText}>Watch video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.understoodButton}>
            <Text style={styles.understoodButtonText}>Understood!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between', // Ensures content is spaced correctly
  },
  contentContainer: {
    padding: 20,
    alignItems: "flex-start",
    marginTop: 50,
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  stepsContainer: {
    marginBottom: 20,
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(0, 123, 255, 0.7)",
    marginRight: 10,
    backgroundColor: "white", // Circle background color
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 15,
    textAlign: "center",
  },
  stepText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  videoButton: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#007BFF",
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderRadius: 35,
  },
  videoButtonText: {
    fontSize: 16,
    color: "#007BFF",
    textAlign: "center",
    fontWeight: "bold",

  },
  understoodButton: {
    backgroundColor: "#AAD4FF",
    paddingHorizontal: 220,
    paddingVertical: 15,
    borderRadius: 30,
  },
  understoodButtonText: {
    fontSize: 16,
    color: "#007BFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  bottomContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});

export default WelcomeScreen;

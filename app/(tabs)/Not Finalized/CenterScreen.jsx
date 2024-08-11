import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const CenterScreen = () => {
  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}></View>
        <Text style={styles.progressText}>1/3</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>What is your center?</Text>
      <Text style={styles.subtitle}>This helps us identify your center on the system.</Text>

      {/* Logo Upload */}
      <TouchableOpacity style={styles.logoUploadContainer}>
        <Text style={styles.logoText}>LOGO</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.uploadText}>Upload Logo</Text>
      </TouchableOpacity>

      <Text>Institute Name</Text>
      <TouchableOpacity style={styles.logoUploadContainer}>
              <Text style={styles.logoText}>Fitness Focus</Text>
            </TouchableOpacity>


      <Text>Institute Type</Text>
      <RNPickerSelect
        style={pickerStyles}
        placeholder={{ label: "Select", value: null }}
        items={[
          { label: "Type 1", value: "type1" },
          { label: "Type 2", value: "type2" },
          { label: "Type 3", value: "type3" }
        ]}
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F8F8",
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#007BFF",
    marginRight: 10,
  },
  progressText: {
    color: "#A9A9A9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#A9A9A9",
    marginBottom: 30,
  },
  logoUploadContainer: {
    height: 80,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  logoText: {
    color: "#D3D3D3",
    fontSize: 16,
  },
  uploadText: {
    color: "#007BFF",
    fontSize: 14,
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    color: "#333333",
    marginBottom: 15,
  },
  nextButton: {
    backgroundColor: "#007BFF",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    color: "#333333",
    marginBottom: 15,
    f
    // Ensure the picker has the same width as the TextInput
  },
  inputAndroid: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    color: "#333333",
    marginBottom: 15,
    // Ensure the picker has the same width as the TextInput
  },
});

export default CenterScreen;

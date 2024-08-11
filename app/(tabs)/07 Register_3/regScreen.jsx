import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Picker } from '@react-native-picker/picker'; // Import Picker from react-native
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for the arrow

const regScreen = () => {
  const [selectedTitle, setSelectedTitle] = useState("");

  return (
    <View style={styles.container}>
      {/* Progress Bar with Back Arrow */}
      <View style={styles.progressBarContainer}>
        <TouchableOpacity onPress={() => console.log('Back Button Pressed')} style={styles.backButton}>
          <View style={styles.backButtonCircle}>
            <Icon name="arrow-back" size={24} color="#666" />
          </View>
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <View style={styles.progressFill}></View>
        </View>
        <Text style={styles.progressText}>3/3</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Who are you?</Text>
      <Text style={styles.subtitle}>This help us identify you on the system.</Text>

      {/* Profile Picture Upload */}
      <TouchableOpacity style={styles.profilePictureContainer} onPress={() => console.log('Upload Profile Picture Pressed')}>
        <Text style={styles.profilePictureText}>Profile Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Upload Profile Picture Pressed')}>
        <Text style={styles.uploadText}>Upload Profile Picture</Text>
      </TouchableOpacity>

      {/* Center-aligned content */}
      <View style={styles.centeredContent}>
        {/* Title Dropdown */}
        <Text style={styles.label}>Title</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedTitle}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedTitle(itemValue)}
          >
            <Picker.Item label="Select" value="" />
            <Picker.Item label="Mr." value="mr" />
            <Picker.Item label="Mrs." value="mrs" />
            <Picker.Item label="Miss" value="miss" />
            <Picker.Item label="Dr." value="dr" />
          </Picker>
        </View>

        {/* First Name Input */}
        <Text style={styles.label}>First Name</Text>
        <TextInput
          placeholder="Adam"
          style={styles.input}
          autoCapitalize="none"
          placeholderTextColor="#666"
        />

        {/* Last Name Input */}
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          placeholder="Smith"
          style={styles.input}
          autoCapitalize="none"
          placeholderTextColor="#666"
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => console.log('Next Button Pressed')}>
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
  backButton: {
    marginRight: 10, // Space between back arrow and progress bar
  },
  backButtonCircle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30, // Circle radius
    padding: 8, // Add padding to increase circle size
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC', // Circle border color
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#E0E0E0",
    marginRight: 10,
    borderRadius: 2,
  },
  progressFill: {
    width: "100%", // 100% of the progress bar
    height: "100%",
    backgroundColor: "#007BFF",
    borderRadius: 2,
  },
  progressText: {
    color: "#A9A9A9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: "#A9A9A9",
    marginBottom: 30,
    textAlign: 'center',
  },
  profilePictureContainer: {
    height: 80,
    width: 80,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    alignSelf: 'center',
  },
  profilePictureText: {
    color: "#D3D3D3",
    fontSize: 14,
  },
  uploadText: {
    color: "#007BFF",
    fontSize: 14,
    marginBottom: 30,
    textAlign: "center",
    fontWeight:"bold",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    color: "#333333",
    marginBottom: 20,
    textAlign: 'center',
    width: '100%', // Ensure input takes full width of the container
  },
  pickerContainer: {
    width: '100%', // Ensure picker takes full width of the container
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    overflow: 'hidden',
  },
  picker: {
    height: 50, // Match the height of the TextInput
    width: '100%',
  },
  centeredContent: {
    alignItems: 'center',
    width: '100%', // Ensure centered content takes full width of the container
  },
  label: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: "bold",
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

export default regScreen;

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; // Import Picker

const ContactScreen = () => {
  const [selectedCode, setSelectedCode] = useState("+94"); // State for country code
  const [email, setEmail] = useState("abc@gmail.com");
  const [website, setWebsite] = useState("abc.lk");

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => console.log('Back Button Pressed')} style={styles.backButton}>
          <View style={styles.backButtonCircle}>
            <Ionicons name="arrow-back" size={24} color="gray" />
          </View>
        </TouchableOpacity>

        <View style={styles.progressBackground}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.progressText}>2/3</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>How to contact your center?</Text>
      <Text style={styles.subtitle}>These information use for display purpose.</Text>

      {/* Institute Hotline Input */}
      <View style={styles.centeredSection}>
        <Text style={styles.label}>Institute Hotline</Text>
        <View style={styles.row}>
          <View style={[styles.input, styles.codeInput]}>
            <Picker
              selectedValue={selectedCode}
              onValueChange={(itemValue) => setSelectedCode(itemValue)}
              style={styles.picker}
              dropdownIconColor="gray"
            >
              <Picker.Item label="+94" value="+94" />
              <Picker.Item label="+1" value="+1" />
              <Picker.Item label="+44" value="+44" />
              {/* Add more country codes as needed */}
            </Picker>
          </View>
          <TextInput
            style={[styles.input, styles.numberInput]}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            textAlign="center"
            placeholderTextColor="gray"
          />
        </View>
      </View>

      {/* Institute Email Input */}
      <View style={styles.centeredSection}>
        <Text style={styles.label}>Institute Email</Text>
        <TextInput
          style={[
            styles.input,
            email === "abc@gmail.com" ? { color: "gray" } : { color: "#333333" }
          ]}
          value={email}
          onChangeText={setEmail}
          placeholder="Institute Email"
          keyboardType="email-address"
          textAlign="center"
          placeholderTextColor="gray"
        />
      </View>

      {/* Institute Website Input */}
      <View style={styles.centeredSection}>
        <Text style={styles.label}>Institute Website</Text>
        <TextInput
          style={[
            styles.input,
            website === "abc.lk" ? { color: "gray" } : { color: "#333333" }
          ]}
          value={website}
          onChangeText={setWebsite}
          placeholder="Institute Website"
          textAlign="center"
          placeholderTextColor="gray"
        />
      </View>

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
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  progressBackground: {
    flex: 1,
    height: 4,
    backgroundColor: "#D3D3D3",
    borderRadius: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  progressFill: {
    width: "66%",
    height: "100%",
    backgroundColor: "#007BFF",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 14,
    color: "#A9A9A9",
  },
  backButton: {
    padding: 10,
  },
  backButtonCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D3D3D3",
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#A9A9A9",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 15,
    borderColor:"white",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    color: "#333333",
  },
  codeInput: {
    flex: 1,
    marginRight: 10,
    justifyContent: "center",
    padding: 0,
    borderRadius: 10,
    borderColor: "#FFFFFF", // Set border color to white
    borderWidth: 1, // Ensure there's a border to apply the color
  },
  picker: {
    flex: 1,
    color: "gray",
    borderRadius: 10,
     borderColor:"white",
    marginLeft: -10, // Adjust the left margin to hide the default spacing
    marginRight: -10, // Adjust the right margin to hide the default spacing
  },
  numberInput: {
    flex: 3,
    fontSize: 16,
    keyboardType:"numberInput",
    width: "100%",
  },
  centeredSection: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
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
    marginTop: 20,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ContactScreen;

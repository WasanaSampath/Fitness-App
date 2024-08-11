import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBackground}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.progressText}>2/3</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>How to contact your center?</Text>
      <Text style={styles.subtitle}>These information use for display purpose.</Text>

      {/* Institute Hotline Input */}
      <View>
      <Text>Institute Hotline
      </Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.codeInput]}
          value="+94"
          editable={false}
        />
        <TextInput
          style={[styles.input, styles.numberInput]}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
        />
      </View>

      {/* Institute Email Input */}
      <View>
            <Text>Institute Email
            </Text>
            </View>
      <TextInput
        style={styles.input}
        placeholder="Institute Email"
        defaultValue="abc@gmail.com"
        keyboardType="email-address"
      />

      {/* Institute Website Input */}
      <View>
            <Text>Institute Website
            </Text>
            </View>
      <TextInput
        style={styles.input}
        placeholder="Institute Website"
        defaultValue="abc.lk"
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
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  progressBackground: {
    flex: 1,
    height: 4,
    backgroundColor: "#D3D3D3",
    borderRadius: 2,
    marginRight: 10,
  },
  progressFill: {
    width: "66%", // 2/3 of the progress bar
    height: "100%",
    backgroundColor: "#007BFF",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 14,
    color: "#A9A9A9",
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
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: "#333333",
  },
  codeInput: {
    flex: 1,
    marginRight: 10,
  },
  numberInput: {
    flex: 3,
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

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons from react-native-vector-icons

const screenWidth = Dimensions.get("window").width;

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      {/* Upper Portion with Background Image */}
      <View style={styles.upperSection}>
        <ImageBackground
          source={require("./back2.jpg")}
          style={styles.background}
        >
          <View style={styles.header}>
            <Text style={styles.appName}>iPass</Text>
            <TouchableOpacity>
              <Icon
                name="notifications-outline"
                size={24}
                color="white"
                style={styles.notificationIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.locationContainer}>
            <TouchableOpacity style={styles.locationButton}>
              <Icon
                name="location-outline"
                size={16}
                color="#333"
                style={styles.locationIcon}
              />
              <Text style={styles.locationText}>Badulla Fitness</Text>
              <Icon
                name="chevron-down-outline"
                size={16}
                color="#333"
                style={styles.chevronIcon}
              />
            </TouchableOpacity>
            <Text style={styles.clientsStatus}>
              20 clients now staying inside the gym
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <Icon
              name="people-outline"
              size={24}
              color="#007bff"
              style={styles.activeClientsIcon}
            />
            <Text style={styles.activeClients}>
              Active clients{" "}
              <Text style={styles.clientNumber}>81 \ 200</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>

      {/* Bottom Portion with White Background */}
      <View style={styles.bottomSection}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Payment overdue</Text>
            <Text> </Text>
            <Icon
              name="warning-outline"
              size={24}
              color="#FF4C4C"
              style={styles.cardIcon}
            />
            <Text style={styles.cardValueRed}>50</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Leads</Text>
            <Text> </Text>
            <Icon
              name="cash-outline"
              size={24}
              color="#50C878"
              style={styles.cardIcon}
            />
            <Text style={styles.cardValueGreen}>50</Text>
          </View>
        </View>

        <View style={styles.revenueContainer}>
          <Text style={styles.revenueTitle}>Revenue Estimate</Text>
          <View style={styles.revenueGraphWrapper}>
            <LineChart
              data={{
                labels: ["A", "B", "C", "D", "E", "F"],
                datasets: [
                  {
                    data: [20000, 45000, 28000, 80000, 99000, 43000],
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                  },
                ],
              }}
              width={screenWidth * 0.9}
              height={220}
              chartConfig={{
                backgroundColor: "#fff",
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#50C878",
                },
              }}
              bezier
              style={styles.revenueGraph}
            />
          </View>
        </View>

        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="menu-outline" size={24} color="#007bff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="home-outline" size={24} color="#007bff" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="people-outline" size={24} color="#A9A9A9" />
            <Text style={styles.navTextInactive}>Students</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="card-outline" size={24} color="#A9A9A9" />
            <Text style={styles.navTextInactive}>Billing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="albums-outline" size={24} color="#A9A9A9" />
            <Text style={styles.navTextInactive}>Groups</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperSection: {
    flex: 1,
    overflow: "hidden", // Ensure that the border radius is applied to the image
    borderRadius: 25,
  },
  background: {
    flex: 1,
    paddingTop: 50, // For top padding to avoid notch issues
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  appName: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  locationContainer: {
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 10,
    width: "50%",
  },
  locationText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  locationIcon: {
    marginRight: 5,
  },
  chevronIcon: {
    marginLeft: 5,
  },
  clientsStatus: {
    color: "white",
    fontSize: 16,
  },
  statsContainer: {
    marginTop: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
    flexDirection: "row", // Align items in a row
    justifyContent: "space-between", // Space between items
  },
  activeClientsIcon: {
    marginRight: 10, // Add some space between the icon and the text
  },
  activeClients: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    flex: 1, // Ensure text takes up available space and centers itself
  },
  clientNumber: {
    fontSize: 22,
    color: "#007bff",
    fontWeight: "bold",
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 5,
  },
  cardIcon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    color: "#A9A9A9",
    marginTop: 5,
    textAlign: "center",
  },
  cardValueRed: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF4C4C",
  },
  cardValueGreen: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#50C878",
  },
  revenueContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  revenueTitle: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  revenueGraphWrapper: {
    borderRadius: 16,
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    // Elevation for Android
    elevation: 10,
  },
  revenueGraph: {
    borderRadius: 16,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    marginTop: 20,
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#007bff",
    marginTop: 4,
  },
  navTextInactive: {
    fontSize: 12,
    color: "#A9A9A9",
    marginTop: 4,
  },
});

export default DashboardScreen;

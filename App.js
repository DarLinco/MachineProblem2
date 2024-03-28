import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";
import { useState } from "react";

const ESP8266_IP = "192.168.191.152";

export default function App() {
  const blinkLeds = async () => {
    try {
      await axios.get(`http://${ESP8266_IP}/blinkLeds`);

      console.log("Turned on LED");
    } catch (error) {
      console.error("Error turning on LED:", error);
    }
  };

  const alternate = async () => {
    try {
      await axios.get(`http://${ESP8266_IP}/alternate`);

      console.log("Turned on LED");
    } catch (error) {
      console.error("Error turning on LED:", error);
    }
  };

  const turnoff = async () => {
    await axios.get(`http://${ESP8266_IP}/turnoff`);

    console.log("Turned off LED");
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ fontWeight: "bold" }}>ESP32 Web Server</Text>

        <Text>
          A simple demonstration to control LED sequence using Access Point(AP)
          mode.
        </Text>
      </View>
      <View style={styles.btns}>
        <View style={styles.btn}>
          <Button title="Blink LED" onPress={blinkLeds} />
        </View>

        <View style={styles.btn}>
          <Button title="Alternate Blinking LED" onPress={alternate} />
        </View>
        <View style={styles.btn}>
          <Button title="Turn off LED" onPress={turnoff} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btns: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    margin: "5%",
  },
  btn: {
    width: "30%",
    color: "blue",

    overflow: "hidden",
    background: "transparent",
    marginBottom: "5%",
  },
});

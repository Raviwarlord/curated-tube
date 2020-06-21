import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is App.js</Text>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
});

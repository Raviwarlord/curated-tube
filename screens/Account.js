import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

class Account extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => <Ionicons name={"ios-settings"} size={25} color="red" />,
  };
  render() {
    return (
      <View>
        <Text style={styles.container}>Email =</Text>
      </View>
    );
  }
}

export default Account;

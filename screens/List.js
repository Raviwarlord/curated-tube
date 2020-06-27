import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View, Button } from "react-native";

export default class List extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name={"ios-settings"} size={25} colour="tintColour" />
    ),
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", alignContent: "center" }}>
        <Button title="just checking" />
        <Text>List Screen</Text>
      </View>
    );
  }
}

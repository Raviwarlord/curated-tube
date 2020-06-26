import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInputComponent,
  Image,
  TextInput,
  Button,
} from "react-native";

export default class List extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", alignContent: "center" }}>
        <Button title="just checking" />
        <Text>List Screen</Text>
      </View>
    );
  }
}

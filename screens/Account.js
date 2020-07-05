import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

class Account extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>Email =</Text>
      </View>
    );
  }
}

const AccountStack = createStackNavigator({
  Account: {
    screen: Account,
  },
});

export default AccountStack;

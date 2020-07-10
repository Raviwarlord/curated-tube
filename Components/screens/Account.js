import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
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
  getAccountDetails = () => {
    return this.props.navigation.getParam("accountDetails");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignContent: "center",
          alignItems: "center",
          margin: 40,
        }}
      >
        <Text>Username: {this.getAccountDetails().username}</Text>
        <Text>Email: {this.getAccountDetails().email}</Text>
        <Text>Phone: {this.getAccountDetails().phone_number}</Text>
        <Button
          mode="contained"
          color="#42A5F5"
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        >
          Logout
        </Button>
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

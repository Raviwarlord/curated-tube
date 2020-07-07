import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
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
          title="logout"
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        />
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

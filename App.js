import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import Login from "./screens/Login";
import MainNavigator from "./screens/Main";
import SignUp from "./screens/SignUp";
import { createStackNavigator } from "react-navigation-stack";

class App extends React.Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text>App.js</Text>
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator(
  {
    HomeScreen: MainNavigator,
    LoginScreen: Login,
    SignUpScreen: SignUp,
  },
  {
    initialRouteName: "LoginScreen",
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default createAppContainer(AppNavigator);

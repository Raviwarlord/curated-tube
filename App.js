import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./screens/Login";
import Main from "./screens/Main";
import SignUp from "./screens/SignUp";

class App extends React.Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text>App.js</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    HomeScreen: Main,
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

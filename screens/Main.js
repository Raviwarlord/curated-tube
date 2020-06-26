import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import List from "./List";

class Main extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 30,
          alignContent: "center",
        }}
      >
        <Button
          title="logout"
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        />
      </View>
    );
  }
}

const MainNavigator = createBottomTabNavigator(
  {
    MainScreen: Main,
    ListScreen: List,
  },
  {
    initialRouteName: "MainScreen",
  }
);

export default MainNavigator;

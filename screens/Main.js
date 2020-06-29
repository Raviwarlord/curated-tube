import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Account from "./Account";
import CategoryList from "../Components/CategoryList";
import { ScrollView } from "react-native-gesture-handler";
import CategoryScreen from "./CategoryScreen";

const styles = StyleSheet.create({
  inputText: {
    position: "relative",
    fontSize: 18,
    padding: 15,
    alignContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "500",
  },
  inputView: {
    height: 50,
    backgroundColor: "#42A5F5",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 30,
  },
});

class Main extends React.Component {
  render() {
    return (
      <ScrollView
        style={{
          marginTop: 30,
          backgroundColor: "steelblue",
        }}
      >
        <Button
          title="logout"
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        />
        <Button
          title="press"
          onPress={() => this.props.navigation.navigate("CategoryScreen")}
        />
        <CategoryList />
      </ScrollView>
    );
  }
}

const mainStack = createStackNavigator(
  {
    MainScreen: {
      screen: Main,
    },
    CategoryScreen: CategoryScreen,
  },
  {
    initialRouteName: "MainScreen",
  }
);

const MainNavigator = createBottomTabNavigator(
  {
    MainScreen: {
      screen: mainStack,
      navigationOptions: {
        tabBarIcon: () => <Ionicons name={"ios-home"} size={25} color="red" />,
      },
    },
    AccountScreen: {
      screen: Account,
      navigationOptions: {
        tabBarIcon: () => (
          <Ionicons name={"ios-settings"} size={25} color="red" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
    },
  },
  {
    initialRouteName: "MainScreen",
  }
);

export default MainNavigator;

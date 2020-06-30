import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Account from "./Account";
import { ScrollView } from "react-native-gesture-handler";
import CategoryScreen from "./CategoryScreen";
import Category from "../Components/Category";
import SearchBar from "../Components/SearchBar";

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
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [
        { title: "Machine Learning", numVideos: "21", selected: false },
        { title: "React Native", numVideos: "14", selected: false },
      ],
    };
  }
  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: "steelblue",
        }}
      >
        <Button
          title="logout"
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        />
        <SearchBar />
        {this.state.categoryList.map((category) => (
          <Category
            onSelectCategory={() => {
              this.props.navigation.navigate("CategoryScreen", {
                title: category.title,
                numVideos: category.numVideos,
              });
            }}
            category={category}
          />
        ))}
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

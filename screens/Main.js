import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Account from "./Account";
import CategoryList from "../Components/CategoryList";
import { ScrollView } from "react-native-gesture-handler";

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
  static navigationOptions = {
    tabBarIcon: () => <Ionicons name={"ios-home"} size={25} color="red" />,
  };

  render() {
    return (
      <ScrollView
        style={{
          marginTop: 30,
        }}
      >
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.inputView}>
            <TextInput style={styles.inputText} placeholder="Search..." />
          </View>
          <View
            style={{
              padding: 20,
            }}
          >
            <Button title="search" />
          </View>
        </View>
        <View
          style={{
            padding: 15,
          }}
        >
          <Button
            title="logout"
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          />
        </View>
        <CategoryList />
      </ScrollView>
    );
  }
}

const MainNavigator = createBottomTabNavigator(
  {
    MainScreen: Main,
    AccountScreen: Account,
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

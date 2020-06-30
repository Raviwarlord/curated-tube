import React from "react";
import { ScrollView, View, Text, Button } from "react-native";

export default class CategoryScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.navigation.getParam("title")}</Text>
        <Text>{this.props.navigation.getParam("numVideos")}</Text>
        <Text>CategoryScreen.js</Text>
      </View>
    );
  }
}

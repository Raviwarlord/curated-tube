import React from "react";
import { ScrollView, View, Text, Button } from "react-native";

export default class CategoryScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            alignContent: "center",
            alignItems: "center",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          {this.props.navigation.getParam("title")}
        </Text>
        <Text
          style={{
            alignContent: "center",
            alignItems: "center",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          {this.props.navigation.getParam("numVideos")}
        </Text>
      </View>
    );
  }
}

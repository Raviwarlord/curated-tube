import React from "react";
import { ScrollView, View, Text, Button } from "react-native";

export default class CategoryScreen extends React.Component {
  getCategory = () => {
    return this.props.navigation.getParam("category");
  };

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
          {this.getCategory().title}
        </Text>
        <Text
          style={{
            alignContent: "center",
            alignItems: "center",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          {this.getCategory().numVideos}
        </Text>
      </View>
    );
  }
}

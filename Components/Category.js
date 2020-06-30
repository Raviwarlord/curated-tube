import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    borderRadius: 40,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "red",
  },
  textView: {
    fontSize: 30,
    alignContent: "center",
    alignItems: "center",
    fontWeight: 20,
  },
});

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Machine Learning",
      numVideos: "20",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.textView}
          onPress={this.props.onSelectCategory}
        >
          <Text style={styles.textView}>{this.props.category.title}</Text>
          <Text style={styles.textView}>
            {this.props.category.numVideos} Videos
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

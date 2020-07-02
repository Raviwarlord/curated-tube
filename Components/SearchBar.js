import React from "react";
import { Button, StyleSheet, View, Text, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: 55,
    backgroundColor: "#42A5F5",
    borderRadius: 30,
  },
  searchBar: {
    height: 55,
    fontSize: 18,
    padding: 15,
    alignContent: "center",
    color: "white",
    fontWeight: "500",
  },
});

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleSubmit() {}

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(search) => this.setState({ search })}
          style={styles.searchBar}
          placeholder="Search..."
          onChangeText={(text) => this.setState({ text: text })}
          onSubmitEditing={this.handleSubmit}
        />
      </View>
    );
  }
}

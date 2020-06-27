import React from "react";
import { Text, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Category from "./Category";

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [{ link: "abc.com" }],
    };
  }

  render() {
    return (
      <ScrollView>
        <Text>ContactsList.js</Text>
        {this.state.categoryList.map((List) => (
          <Category />
        ))}
      </ScrollView>
    );
  }
}

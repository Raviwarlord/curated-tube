import React from "react";
import { Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Category from "./Category";
import SearchBar from "./SearchBar";

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [{ title: "", link: "" }],
    };
  }

  render() {
    return (
      <ScrollView>
        <SearchBar />
        {this.state.categoryList.map((List) => (
          <Category />
        ))}
      </ScrollView>
    );
  }
}

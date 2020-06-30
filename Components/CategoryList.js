import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Category from "./Category";
import SearchBar from "./SearchBar";

export default class CategoryList extends React.Component {
  render() {
    return (
      <ScrollView>
        <SearchBar />
        {this.props.categoryList.map((category) => (
          <Category
            onSelectCategory={this.props.onSelectCategory}
            category={category}
          />
        ))}
      </ScrollView>
    );
  }
}

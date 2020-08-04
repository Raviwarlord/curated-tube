import React from 'react';
import {Button, StyleSheet, View, Text, TextInput} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  searchBar: {
    width: 350,
    height: 55,
    position: 'relative',
    backgroundColor: '#353540',
    fontSize: 18,
    margin: 10,
    padding: 15,
    alignContent: 'center',
    color: 'white',
    fontWeight: '500',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'green',
  },
});

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleSubmit() {}

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(search) => this.setState({search})}
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => this.setState({text: text})}
          onSubmitEditing={this.handleSubmit}
        />
      </View>
    );
  }
}

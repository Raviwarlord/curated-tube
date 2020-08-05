import React from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 7,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: 'green',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#353540',
  },
  textView: {
    flex: 1,
    fontSize: 25,
    color: 'white',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'normal',
  },
});

export default class Category extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.textView}
          onPress={this.props.onSelectCategory}>
          <Text style={styles.textView}>{this.props.category.title}</Text>
          <Text style={styles.textView}>
            {this.props.category.numVideos} Lectures
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

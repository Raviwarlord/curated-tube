import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInputComponent,
  Image,
  TextInput,
  Button,
} from "react-native";

class PlaceHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.name,
    };
  }

  render() {
    return (
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder={this.state.title}
          placeholderTextColor="#003f5c"
        />
      </View>
    );
  }
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.logo}>Hey there</Text>
        <PlaceHolder name="email" />
        <PlaceHolder name="password" />
        <Button title="Login" style={styles.logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "100%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
});

import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import Firebase from "../Config/Firebase";

export default class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone_number: "",
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  handleSignUp = () => {
    const Email = this.state.email;
    const Pass = this.state.password;
    const message = "this is a signup message";

    Firebase.auth()
      .createUserWithEmailAndPassword(Email, Pass)
      .then(() =>
        this.props.navigation.navigate("MainScreen", {
          accountDetails: this.state,
        })
      )
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(val) => this.onChangeText("username", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(val) => this.onChangeText("password", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(val) => this.onChangeText("email", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(val) => this.onChangeText("phone_number", val)}
        />
        <View
          style={{
            flexDirection: "column",
            height: 90,
            width: 150,
            justifyContent: "space-around",
          }}
        >
          <Button title="Sign Up" onPress={this.handleSignUp} />
          <Button
            title="logout"
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 15,
    color: "white",
    borderRadius: 30,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "steelblue",
    alignItems: "center",
  },
});

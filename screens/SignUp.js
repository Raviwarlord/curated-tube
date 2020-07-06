import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { Firebase, db } from "../Config/Firebase";

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

  checkEmail = (email) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email.value) == false) this.onChangeText("email", email);
  };

  handleSignUp = () => {
    return async () => {
      try {
        const user = this.state;
        console.log(user);
        const response = await Firebase.auth().createUserWithEmailAndPassword(
          user.email,
          user.password
        );

        if (response.user.uid) {
          db.collection("users").doc(response.user.uid).set(user);
          this.props.navigation.navigate("LoginScreen");
        }
      } catch (e) {
        console.log(e);
      }
    };
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
          keyboardType="numeric"
        />
        <View
          style={{
            flexDirection: "column",
            height: 90,
            width: 150,
            justifyContent: "space-around",
          }}
        >
          <Button title="Sign Up" onPress={this.handleSignUp()} />
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

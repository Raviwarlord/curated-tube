import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { Firebase, db } from "../Config/Firebase";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    fontFamily: "sans-serif-medium",
    color: "#fb5b5a",
    margin: 10,
  },
  inputView: {
    width: 350,
    height: 55,
    backgroundColor: "#42A5F5",
    margin: 10,
    borderRadius: 30,
  },
  inputText: {
    height: 55,
    position: "relative",
    fontSize: 18,
    padding: 15,
    alignContent: "center",
    color: "white",
    fontWeight: "500",
  },
});

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleLogin = () => {
    return async () => {
      try {
        const response = await Firebase.auth().signInWithEmailAndPassword(
          this.state.email,
          this.state.password
        );

        const user = await db.collection("users").doc(response.user.uid).get();
        this.props.navigation.navigate("MainScreen", {
          accountDetails: user.data(),
        });
      } catch (e) {
        console.log(e);
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Hey there</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) =>
              this.setState({ email: text, password: this.state.password })
            }
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text) =>
              this.setState({ email: this.state.email, password: text })
            }
            autoCapitalize="none"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            height: 90,
            width: 150,
            justifyContent: "space-around",
          }}
        >
          <Button mode="contained" color="#42A5F5" onPress={this.handleLogin()}>
            Login
          </Button>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUpScreen")}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "400",
              color: "black",
            }}
          >
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

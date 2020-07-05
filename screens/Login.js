import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInputComponent,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Firebase from "../Config/Firebase";

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
    fontSize: 18,
    fontWeight: "500",
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
    const Email = this.state.email;
    const Pass = this.state.password;
    const message = "this is a login message";

    Firebase.auth()
      .signInWithEmailAndPassword(Email, Pass)
      .then(() =>
        this.props.navigation.navigate("MainScreen", {
          accountDetails: this.props.navigation.getParam("accountDetails"),
        })
      )
      .catch((error) => console.log(error));
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
          <Button title="Login" onPress={this.handleLogin} />
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUpScreen")}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 400,
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

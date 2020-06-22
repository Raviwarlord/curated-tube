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

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    position: "relative",
    alignContent: "center",
    color: "white",
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

  print() {
    console.log(this.state);
  }

  render() {
    return (
      <View>
        <Text style={styles.logo}>Hey there</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) =>
              this.setState({ email: text, password: this.state.password })
            }
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text) =>
              this.setState({ email: this.state.email, password: text })
            }
          />
        </View>
        <Button
          title="Login"
          style={styles.logo}
          onPress={() => console.log(this.state)}
        />
      </View>
    );
  }
}

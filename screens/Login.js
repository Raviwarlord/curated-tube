import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Button} from 'react-native-paper';
import {Firebase, db} from '../Config/Firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353550',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: 'sans-serif-medium',
    color: '#42A5F5',
    margin: 10,
  },
  inputText: {
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

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = () => {
    return async () => {
      try {
        const user = this.state;

        const response = await Firebase.auth()
          .signInWithEmailAndPassword(user.email, user.password)
          .then(() => {
            this.setState({
              email: '',
              password: '',
            });
            this.props.navigation.navigate('MainScreen');
          })
          .catch((error) => alert(error));
      } catch (e) {
        console.log(e);
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Curated Tube</Text>
        <TextInput
          defaultValue={this.state.email}
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) =>
            this.setState({email: text, password: this.state.password})
          }
          autoCapitalize="none"
        />
        <TextInput
          defaultValue={this.state.password}
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#aaaaaa"
          secureTextEntry={true}
          onChangeText={(text) =>
            this.setState({email: this.state.email, password: text})
          }
          autoCapitalize="none"
        />
        <View
          style={{
            flexDirection: 'column',
            height: 90,
            width: 150,
            justifyContent: 'space-around',
          }}>
          <Button mode="contained" color="#42A5F5" onPress={this.handleLogin()}>
            Login
          </Button>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignUpScreen')}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              color: '#20bb30',
            }}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

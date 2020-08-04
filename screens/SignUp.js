import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {Firebase, db} from '../Config/Firebase';

export default class SignUp extends React.Component {
  state = {
    password: '',
    email: '',
  };

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  handleSignUp = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          email: '',
          password: '',
        });
        this.props.navigation.navigate('LoginScreen');
      })
      .catch((error) => alert(error));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 50,
            fontFamily: 'sans-serif-medium',
            color: '#42A5F5',
            margin: 10,
          }}>
          Curated Tube
        </Text>
        <TextInput
          defaultValue={this.state.email}
          style={styles.input}
          placeholder="Email..."
          autoCapitalize="none"
          placeholderTextColor="#aaaaaa"
          onChangeText={(val) => this.onChangeText('email', val)}
        />
        <TextInput
          defaultValue={this.state.password}
          style={styles.input}
          placeholder="Password..."
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#aaaaaa"
          onChangeText={(val) => this.onChangeText('password', val)}
        />
        <View
          style={{
            flexDirection: 'column',
            height: 90,
            width: 150,
            justifyContent: 'space-around',
          }}>
          <Button
            title="Sign Up"
            mode="contained"
            color="#42A5F5"
            onPress={this.handleSignUp}>
            Sign Up
          </Button>
          <Button
            mode="contained"
            color="#42A5F5"
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            Login
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
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
  container: {
    flex: 1,
    backgroundColor: '#353550',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

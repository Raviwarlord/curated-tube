import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {createStackNavigator} from 'react-navigation-stack';
import {ScrollView} from 'react-native-gesture-handler';
import CategoryScreen from './CategoryScreen';
import Category from '../Components/Category';
import SearchBar from '../Components/SearchBar';
import PlayerScreen from './PlayerScreen';

const styles = StyleSheet.create({
  inputText: {
    position: 'relative',
    fontSize: 18,
    padding: 15,
    alignContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  inputView: {
    height: 50,
    backgroundColor: '#42A5F5',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 30,
  },
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [
        {
          title: 'React Native',
          numVideos: '14',
          playlistId: 'PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR',
        },
        {
          title: 'Web Development',
          numVideos: '23',
          playlistId: 'PLhQjrBD2T380xvFSUmToMMzERZ3qB5Ueu',
        },
      ],
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Curated - Tube',
      headerLeft: null,
      headerRight: () => (
        <View style={{margin: 10}}>
          <Button
            icon="account"
            mode="outlined"
            color="green"
            onPress={() => navigation.navigate('LoginScreen')}>
            Logout
          </Button>
        </View>
      ),
    };
  };

  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: '#353550',
        }}>
        <SearchBar />
        {this.state.categoryList.map((category) => {
          return (
            <Category
              onSelectCategory={() => {
                return this.props.navigation.navigate('CategoryScreen', {
                  category: category,
                });
              }}
              category={category}
            />
          );
        })}
      </ScrollView>
    );
  }
}

const mainStack = createStackNavigator(
  {
    MainScreen: {
      screen: Main,
    },
    CategoryScreen: CategoryScreen,
    PlayerScreen: PlayerScreen,
  },
  {
    initialRouteName: 'MainScreen',
  },
);

export default mainStack;

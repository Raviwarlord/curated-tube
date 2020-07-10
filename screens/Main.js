import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {createStackNavigator} from 'react-navigation-stack';
import Account from './Account';
import {ScrollView} from 'react-native-gesture-handler';
import CategoryScreen from './CategoryScreen';
import Category from '../Components/Category';
import SearchBar from '../Components/SearchBar';

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
        {title: 'React Native', numVideos: '14', list: ['raviwarlord']},
      ],
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: "hey how you doin'g?",
      headerLeft: null,
      headerRight: () => (
        <View style={{margin: 10}}>
          <Button
            icon="account"
            mode="outlined"
            color="#42A5F5"
            onPress={() =>
              navigation.navigate('AccountScreen', {
                accountDetails: navigation.getParam('accountDetails'),
              })
            }>
            Account
          </Button>
        </View>
      ),
    };
  };

  componentDidMount() {}

  getAccountDetails = () => {
    return this.props.navigation.getParam('accountDetails');
  };

  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: 'steelblue',
        }}>
        <View
          style={{
            margin: 20,
            alignContent: 'center',
            alignItems: 'center',
          }}></View>
        <SearchBar />
        {this.state.categoryList.map((category) => (
          <Category
            onSelectCategory={() => {
              this.props.navigation.navigate('CategoryScreen', {
                category: category,
              });
            }}
            category={category}
          />
        ))}
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
    AccountScreen: Account,
  },
  {
    initialRouteName: 'MainScreen',
  },
);

export default mainStack;

// const MainNavigator = createStackNavigator({
//   MainScreen: Main,
//   AccountScreen: Account,
// });

// const MainNavigator = createBottomTabNavigator(
//   {
//     MainScreen: {
//       screen: mainStack,
//       navigationOptions: {
//         tabBarIcon: () => <Ionicons name={"ios-home"} size={25} color="red" />,
//       },
//     },
//     AccountScreen: {
//       screen: Account,
//       navigationOptions: {
//         tabBarIcon: () => (
//           <Ionicons name={"ios-settings"} size={25} color="red" />
//         ),
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: "red",
//       inactiveTintColor: "grey",
//     },
//   },
//   {
//     initialRouteName: "MainScreen",
//   }
// );

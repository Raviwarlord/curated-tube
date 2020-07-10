import React, {useRef, useState} from 'react';
import {ScrollView, View, Text, Button} from 'react-native';
import YouTube from 'react-native-youtube';

export default class CategoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: '',
      quality: '',
      error: '',
    };
  }
  getCategory = () => {
    return this.props.navigation.getParam('category');
  };

  render() {
    return (
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            alignContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          {this.getCategory().title}
        </Text>
        <Text
          style={{
            alignContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          {this.getCategory().numVideos}
        </Text>
        <YouTube
          apiKey="AIzaSyDAasiScAyyjLgOxFZP0gsmRxwimmlNTdk"
          playlistId="PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR" // The YouTube video ID
          play // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={(e) => this.setState({isReady: true})}
          onChangeState={(e) => this.setState({status: e.state})}
          onChangeQuality={(e) => this.setState({quality: e.quality})}
          onError={(e) => this.setState({error: e.error})}
          style={{alignSelf: 'stretch', height: 300}}
        />
        <Text>{this.getCategory().list[0]}</Text>
      </View>
    );
  }
}

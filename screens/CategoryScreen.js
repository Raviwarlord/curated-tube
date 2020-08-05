import React, {useRef, useState} from 'react';
import {ScrollView, View, Text, Button, Image} from 'react-native';
import VideoListIcon from '../Components/VideoListIcon';

export default class CategoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: '',
      quality: '',
      error: '',
      isFullScreen: '',
      videoList: [],
    };
  }

  getCategory = () => {
    return this.props.navigation.getParam('category');
  };

  checkDuration = (runTime) => {
    return true;
  };

  getVideoList = async () => {
    try {
      const playlistId = this.getCategory().playlistId;
      const videoL = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=40&key=AIzaSyDAasiScAyyjLgOxFZP0gsmRxwimmlNTdk`,
      );
      const results = await videoL.json();
      const list = [];
      results.items.map((item) => {
        const video = {
          title: '',
          videoId: '',
          thumbnailId: '',
        };

        video.title = item.snippet.title;
        video.videoId = item.snippet.resourceId.videoId;
        video.thumbnailId = item.snippet.thumbnails.medium;

        list.push(video);
      });

      this.setState({videoList: list});
    } catch (e) {
      console.log('this is error');
      console.log(e);
    }
  };

  componentDidMount() {
    this.getVideoList();
  }

  render() {
    if (this.state.videoList.length === 0) {
      return <Text>Loading...</Text>;
    }

    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#353550',
        }}>
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              alignContent: 'center',
              alignItems: 'center',
              fontSize: 30,
              fontWeight: 'normal',
              color: '#eeeeee',
            }}>
            {this.getCategory().title}
          </Text>
          {this.state.videoList.map((item) => {
            return (
              <VideoListIcon
                thumbnailUrl={item.thumbnailId.url}
                title={item.title}
                onSelectVideo={() => {
                  return this.props.navigation.navigate('PlayerScreen', {
                    videoId: item.videoId,
                  });
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

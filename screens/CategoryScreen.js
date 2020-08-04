import React, {useRef, useState} from 'react';
import {ScrollView, View, Text, Button, Image} from 'react-native';
import YouTube from 'react-native-youtube';
import Player from '../Components/Player';
import VideoListIcon from '../Components/VideoListIcon';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

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

  getVideoList = async () => {
    try {
      const playlistId = this.getCategory().playlistId;
      const videoL = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=40&key=AIzaSyDAasiScAyyjLgOxFZP0gsmRxwimmlNTdk`,
      );
      const results = await videoL.json();
      const list = [];
      // const urls = [];
      results.items.map((item) => {
        const video = {
          title: '',
          videoId: '',
          thumbnailId: '',
        };

        video.title = item.snippet.title;
        video.videoId = item.snippet.resourceId.videoId;
        video.thumbnailId = item.snippet.thumbnails.medium;

        // this.state.videoList.push(video);
        list.push(video);
        // console.log(video);
        // list.push(item.snippet.resourceId.videoId);
        // urls.push(item.snippet.thumbnails.default);
      });

      this.setState({videoList: list});
      // console.log(this.state.videoListIds);
    } catch (e) {
      console.log('this is error');
      console.log(e);
    }
  };

  componentDidMount() {
    this.getVideoList();
    // console.log(this.state.videoList[0].thumbnailId);
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
              fontSize: 40,
              fontWeight: 'bold',
              color: '#eeeeee',
            }}>
            {this.getCategory().title}
          </Text>
          {/* <VideoListIcon
            thumbnailUrl={this.state.videoList[0].thumbnailId.url}
            title={this.state.videoList[0].title}
          /> */}

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
          {/* <View
            style={{
              flex: 1,
              margin: 20,
              padding: 20,
              alignItems: 'center',
              alignContent: 'center',
              borderRadius: 40,
              borderWidth: 5,
              borderColor: 'green',
            }}>
            <TouchableOpacity
              style={{
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: this.state.videoList[0].thumbnailId.url}}
                style={{height: 120, width: 200}}
              />
              <Text
                style={{
                  color: 'white',
                }}>
                {this.state.videoList[0].title}
              </Text>
            </TouchableOpacity>
          </View> */}
          {/* {this.state.videoListIds.map((item) => {
            return <Player videoId={item} />;
          })} */}
          {/* <Player videoId={this.state.videoListIds[0]} />
          <Player videoId={this.state.videoListIds[5]} /> */}
        </View>
        {/* <Button
          title={'press'}
          onPress={() => {
            this.props.navigation.navigate('PlayerScreen');
          }}
        /> */}
      </ScrollView>
    );
  }
}

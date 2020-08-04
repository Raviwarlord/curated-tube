import React from 'react';
import {View, Text} from 'react-native';
import YouTube from 'react-native-youtube';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propsRecived: 0,
      isReady: false,
      status: '',
      quality: '',
      error: '',
      isFullScreen: '',
      shouldRender: false,
    };
  }

  render() {
    return (
      <YouTube
        apiKey="AIzaSyDAasiScAyyjLgOxFZP0gsmRxwimmlNTdk"
        videoId={this.props.videoId} // The YouTube video ID
        play={true} // control playback of video with true/false
        fullscreen={true} // control whether the video should play in fullscreen or inline
        loop={false} // control whether the video should loop when ended
        onReady={(e) => this.setState({isReady: true})}
        onChangeState={(e) => this.setState({status: e.state})}
        onChangeQuality={(e) => this.setState({quality: e.quality})}
        onError={(e) => this.setState({error: e.error})}
        style={{
          alignSelf: 'stretch',
          height: 250,
        }}
      />
    );
  }
}

export default Player;

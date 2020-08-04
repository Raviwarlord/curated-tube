import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Player from '../Components/Player';

const PlayerScreen = (props) => {
  const {navigation} = props;
  const videoId = navigation.getParam('videoId');
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#353550',
      }}>
      <Player videoId={videoId} />
    </View>
  );
};

export default PlayerScreen;

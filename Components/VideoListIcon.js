import React, {useRef, useState} from 'react';
import {ScrollView, View, Text, Button, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const VideoListIcon = (props, navigation) => {
  return (
    <View
      style={{
        flex: 1,
        margin: 10,
        padding: 15,
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
        }}
        onPress={props.onSelectVideo}>
        <Image
          source={{uri: props.thumbnailUrl}}
          style={{height: 120, width: 200}}
        />
        <Text
          style={{
            color: 'white',
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VideoListIcon;

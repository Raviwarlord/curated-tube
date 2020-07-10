import React, { useRef, useState } from "react";
import { ScrollView, View, Text, Button } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

function Player() {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  return (
    <YoutubePlayer
      ref={playerRef}
      height={300}
      width={400}
      videoId={"AVAc1gYLZK0"}
      play={playing}
      onChangeState={(event) => console.log(event)}
      onReady={() => console.log("ready")}
      onError={(e) => console.log(e)}
      onPlaybackQualityChange={(q) => console.log(q)}
      volume={50}
      playbackRate={1}
      initialPlayerParams={{
        cc_lang_pref: "us",
        showClosedCaptions: true,
      }}
    />
  );
}

export default class CategoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: "",
      quality: "",
      error: "",
    };
  }
  getCategory = () => {
    return this.props.navigation.getParam("category");
  };

  render() {
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            alignContent: "center",
            alignItems: "center",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          {this.getCategory().title}
        </Text>
        <Text
          style={{
            alignContent: "center",
            alignItems: "center",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          {this.getCategory().numVideos}
        </Text>
        <Text>{this.getCategory().list[0]}</Text>
        <Player />
      </View>
    );
  }
}

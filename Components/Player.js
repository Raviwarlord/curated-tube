import React, { useRef, useState } from "react";
import { ScrollView, View, Text, Button } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Player() {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  return (
    <YoutubePlayer
      ref={playerRef}
      height={300}
      width={400}
      videoId={"X52b-8y2Hf4"}
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

import React from 'react';
import { StyleSheet } from 'react-native';
import { Video } from 'expo-av';

interface IProps {
  isVisible: boolean;
  video: any;
  poster: any;
}

const VideoPlayer: React.FC<IProps> = ({ video, poster, isVisible }) => (
  <Video
    style={styles.video}
    rate={1.0}
    volume={1.0}
    isMuted={false}
    shouldPlay={isVisible}
    useNativeControls
    posterSource={poster}
    source={video}
    resizeMode="cover"
    isLooping
    positionMillis={0}
  />
);

const styles = StyleSheet.create({
  video: {
    height: '100%',
    width: '100%',
  },
});

export default VideoPlayer;

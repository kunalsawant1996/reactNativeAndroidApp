//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import Video from 'react-native-video';
import Loader from '../loadingPage/loader';

// create a component
const NewsVideo = ({route}) => {
  const {styles, height, width} = useStyle();
  const {video_url} = route.params;
  return (
    <View style={styles.rootContainer}>
      <Video
        style={styles.video}
        source={{
          uri: video_url,
        }}
      />
    </View>
  );
};

// define your styles
const useStyle = () => {
  const {height, width} = useWindowDimensions();
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
    video: {
      //   flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
      width: width,
    },
  });
  return {styles, height, width};
};

//make this component available to the app
export default NewsVideo;

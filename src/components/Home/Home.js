//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';
import {CATCH_UP_DATA_API, TICKER_DATA_API} from '../../utils/constants';
import Tabs from './Tabs/Tabs';
import TickerLiveData from '../../local-json/TickerAppFASTchannels.json'
import CatchUpLiveData from '../../local-json/TickerAppCatchUp.json'

// create a component
const Home = ({navigation}) => {
  const {styles, height, width} = useStyle();
  const [apiData, setApiData] = useState();
  const [catchUpApiData, setCatchUpApiData] = useState();

  useEffect(() => {
    const tickerAPI = fetch(TICKER_DATA_API)
      .then(res => res.json())
      .then(data => setApiData(data))
      .catch(err => {
        console.log(err)
        setApiData(TickerLiveData)
      });

    const catchUpAPI = fetch(CATCH_UP_DATA_API)
      .then(res => res.json())
      .then(data => setCatchUpApiData(data))
      .catch(err => {
        console.log(err)
        setCatchUpApiData(CatchUpLiveData)
      });

    // Promise.all()
  }, []);

  const onTickerTab = item => {};

  const onCatchUpTab = item => {
    // console.log('CatchUpTab',item);
    navigation.navigate('News',{
        video_url: item ? item.video_url : '',
      })
  };

  return (
    <ImageBackground
      source={require('../../assets/bkgImage.png')}
      resizeMode="cover"
      style={styles.image}>
      <View>
        <Image source={require('../../assets/Ticker_News_TRANSPARENT.png')} />
      </View>
      <View style={styles.section}>
        <Text style={styles.textStyle}>Live</Text>
        <View>
          {/* <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}> */}
          <FlatList
            data={apiData}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => onTickerTab(item)}>
                <Tabs imageUri={item.thumbnail_urls[1]['403x226']} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, ind) => ind}
            horizontal={true}
          />
          {/* <Tabs imageUri={require('./src/assets/tickerNews.png')} />
              <Tabs imageUri={require('./src/assets/tickerFinance.png')} />
              <Tabs imageUri={require('./src/assets/tickerInsight.png')} />
              <Tabs imageUri={require('./src/assets/tickerOriginals.png')} /> */}
          {/* </ScrollView> */}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.textStyle}>Catch Up</Text>
        <View>
          <FlatList
            data={catchUpApiData}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => onCatchUpTab(item)}>
                <Tabs imageUri={item.thumbnail_urls[2]['403x226']} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.video_id}
            horizontal={true}
          />
          {/* <Video source={{uri: "https://live-hls-klqp.livepush.io/live_cdn/emRsiDBzw9HjxbllS/index.m3u8"}} /> */}
        </View>
      </View>
    </ImageBackground>
  );
};

// define your styles
const useStyle = () => {
  const {height, width} = useWindowDimensions();
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      height: height,
      width: width,
    },
    section: {
      marginTop: 60,
    },
    textStyle: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },
  });
  return {styles, height, width};
};

//make this component available to the app
export default Home;

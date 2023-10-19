/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Pressable,
} from 'react-native';
import Home from './src/components/Home/Home';
import NewsVideo from './src/components/news/news';
import ErrorPage from './src/components/errorPage/errorPage';
import Loader from './src/components/loadingPage/loader';

function App() {
  const {styles, height, width} = useStyle();
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.rootContainer}>
      {/* <Loader/> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="News" component={NewsVideo} />
          <Stack.Screen name="ErrorPage" component={ErrorPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const useStyle = () => {
  const {height, width} = useWindowDimensions();
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
  });
  return {styles, height, width};
};

export default App;

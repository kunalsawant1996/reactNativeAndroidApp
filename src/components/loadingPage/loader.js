//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const Loader = () => {
    return (
        <View style={styles.loaderContainer}>
      <View style={styles.loaderBox}>
        <View>
          <Image style={{height:30,width:30}} source={require('../../assets/loader.png')} />
        </View>
      </View>
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        backgroundColor: '#2d4256',
      },
      loaderBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

//make this component available to the app
export default Loader;

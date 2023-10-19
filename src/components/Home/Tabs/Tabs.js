//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const Tabs = ({imageUri}) => {
  return (
    <View
      style={{
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd',
      }}>
      <View style={{flex: 2}}>
        <Image
          source={{uri: imageUri}}
          style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
        />
      </View>
    </View>
  );
};

//make this component available to the app
export default Tabs;

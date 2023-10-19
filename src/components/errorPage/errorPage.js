//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const ErrorPage = ({title,errorMsg}) => {
  return (
    <View style={styles.errorContainer}>
      <View style={styles.errorBox}>
        <View>
          <Text style={styles.errorText}>Something went wrong</Text>
        </View>
        <View style={{margin: 10}}>
          <Text style={{color: '#FAFAFAB2'}}>
            We were unable to process your request. Please try again.
          </Text>
        </View>
        <View style={{margin: 10}}>
          <Pressable
            style={[
              styles.buttonStyle,
              {
                backgroundColor: '#F6F6F6',
                color: '#142947',
                fontWeight: 'bold',
                marginBottom: 10,
              },
            ]}>
            <Text>Try Again</Text>
          </Pressable>
          <Pressable
            style={[
              styles.buttonStyle,
              {
                borderColor: 'black',
                borderWidth: 2,
                backgroundColor: '#2d4256',
                color: 'red',
              },
            ]}>
            <Text>Exit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    backgroundColor: '#2d4256',
  },
  errorBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#FAFAFA',
    fontWeight: 'bold',
  },
  buttonStyle: {
    alignItems: 'center',
    width: 150,
    height: 55,
    padding: 18,
    borderRadius: 8,
    border: 2,
  },
});

//make this component available to the app
export default ErrorPage;

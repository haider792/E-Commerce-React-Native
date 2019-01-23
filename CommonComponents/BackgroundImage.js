import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

const remote = 'http://i.imgur.com/y825kOG.jpg';
export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={{ uri: remote }}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null
  },
});

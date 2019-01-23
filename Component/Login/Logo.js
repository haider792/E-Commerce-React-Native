import React, {Component} from 'react';
import PropTypes from 'prop-types';
const ReactNative = require('react-native');
const {PanResponder, StyleSheet, Text, View , Animated , TouchableOpacity, Easing , Button , Image} = ReactNative;

import logoImg from './logo.png';
import facebook from './facebook.png';
import instagram from './instagram.jpg';
import * as Animatable from 'react-native-animatable';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


export default class Logo extends Component {

  constructor() {
    super()
    this.animated = new Animated.Value(0);
    
    var range = 1, snapshot = 50, radius = 100;
    /// translateX
    var inputRange = [], outputRange = [];
    for (var i=0; i<=snapshot; ++i) {
        var value = i/snapshot;
        var move = Math.sin(value * Math.PI * 2) * radius;
        inputRange.push(value);
        outputRange.push(move);
    }
    this.translateX = this.animated.interpolate({ inputRange, outputRange });

    /// translateY
    var inputRange = [], outputRange = [];
    for (var i=0; i<=snapshot; ++i) {
        var value = i/snapshot;
        var move = -Math.cos(value * Math.PI * 2) * radius;
        inputRange.push(value);
        outputRange.push(move);
    }
    this.translateY = this.animated.interpolate({ inputRange, outputRange });


    this.animated2 = new Animated.Value(0);
    
    var range2 = 1, snapshot2 = 50, radius2 = 100;

    var inputRange = [], outputRange = [];
    for (var i=0; i<=snapshot2; ++i) {
        var value = i/snapshot2;
        var move = Math.sin(value * Math.PI * 2) * radius2;
        inputRange.push(value);
        outputRange.push(move);
    }
    this.translateX2 = this.animated2.interpolate({ inputRange, outputRange });

    var inputRange = [], outputRange = [];
    for (var i=0; i<=snapshot2; ++i) {
        var value = i/snapshot2;
        var move = -Math.cos(value * Math.PI * 2) * radius2;
        inputRange.push(value);
        outputRange.push(move);
    }
    this.translateY2 = this.animated2.interpolate({ inputRange, outputRange });


    this.animated3 = new Animated.Value(0);
    

    var range3 = 1, snapshot3 = 50, radius3 = 100;

    var inputRange = [], outputRange = [];
    for (var i=0; i<=snapshot3; ++i) {
        var value = i/snapshot3;
        var move = Math.sin(value * Math.PI * 2) * radius3;
        inputRange.push(value);
        outputRange.push(move);
    }
    this.translateX3 = this.animated3.interpolate({ inputRange, outputRange });

    var inputRange = [], outputRange = [];
    for (var i=0; i<=snapshot3; ++i) {
        var value = i/snapshot3;
        var move = -Math.cos(value * Math.PI * 2) * radius3;
        inputRange.push(value);
        outputRange.push(move);
    }
    this.translateY3 = this.animated3.interpolate({ inputRange, outputRange });


    this.animated4 = new Animated.Value(0);
    

    var range4 = 1, snapshot4 = 50, radius4 = 100;

    var inputRange = [], outputRange = [];
    for (var i=0; i<=snapshot4; ++i) {
        var value = i/snapshot4;
        var move = Math.sin(value * Math.PI * 2) * radius4;
        inputRange.push(value);
        outputRange.push(move);
    }
    this.translateX4 = this.animated4.interpolate({ inputRange, outputRange });

    var inputRange = [], outputRange = [];
    for (var i=0; i<=snapshot4; ++i) {
        var value = i/snapshot4;
        var move = -Math.cos(value * Math.PI * 2) * radius4;
        inputRange.push(value);
        outputRange.push(move);
    }
    this.translateY4 = this.animated4.interpolate({ inputRange, outputRange });



    this.animated5 = new Animated.Value(0);
    
    var range5 = 1, snapshot5 = 50, radius5 = 100;

    var inputRange = [], outputRange = [];
    for (var i=0; i<=snapshot5; ++i) {
        var value = i/snapshot5;
        var move = Math.sin(value * Math.PI * 2) * radius5;
        inputRange.push(value);
        outputRange.push(move);
    }
    this.translateX5 = this.animated5.interpolate({ inputRange, outputRange });

    var inputRange = [], outputRange = [];
    for (var i=0; i<=snapshot5; ++i) {
        var value = i/snapshot5;
        var move = -Math.cos(value * Math.PI * 2) * radius5;
        inputRange.push(value);
        outputRange.push(move);
    }
    this.translateY5 = this.animated5.interpolate({ inputRange, outputRange });






    this.animate();
    setTimeout(()=>{

    this.animate2();
    
    },4000)
    setTimeout(()=>{

      this.animate3();
      
      },8000)

      setTimeout(()=>{

        this.animate4();
        
        },12000)
        setTimeout(()=>{

          this.animate5();
          
          },15000)
}

  animate() {
  //   this.animated.setValue(0)
  //   Animated.loop(
  //   Animated.sequence([
  //   Animated.timing(this.animated, {
  //     toValue: 1,
  //     duration: 5000,
  //   }),
  // ]),
  // ).start();
  this.animated.setValue(0)

  Animated.timing(
    this.animated,
    {
      toValue: 1,
      duration: 18000,
      easing: Easing.linear
    }
  ).start(() => this.animate())
  }


  animate2() {
    //   this.animated.setValue(0)
    //   Animated.loop(
    //   Animated.sequence([
    //   Animated.timing(this.animated, {
    //     toValue: 1,
    //     duration: 5000,
    //   }),
    // ]),
    // ).start();
    this.animated2.setValue(0)

  Animated.timing(
    this.animated2,
    {
      toValue: 1,
      duration: 18000,
      easing: Easing.linear
    }
    ).start(() => this.animate2())
    
  }


  animate3() {
    //   this.animated.setValue(0)
    //   Animated.loop(
    //   Animated.sequence([
    //   Animated.timing(this.animated, {
    //     toValue: 1,
    //     duration: 5000,
    //   }),
    // ]),
    // ).start();
    this.animated3.setValue(0)

  Animated.timing(
    this.animated3,
    {
      toValue: 1,
      duration: 18000,
      easing: Easing.linear
    }
    ).start(() => this.animate3())
    
  }
  


  animate4() {
    //   this.animated.setValue(0)
    //   Animated.loop(
    //   Animated.sequence([
    //   Animated.timing(this.animated, {
    //     toValue: 1,
    //     duration: 5000,
    //   }),
    // ]),
    // ).start();
    this.animated4.setValue(0)

  Animated.timing(
    this.animated4,
    {
      toValue: 1,
      duration: 18000,
      easing: Easing.linear
    }
    ).start(() => this.animate4())
    
  }


  animate5() {
    //   this.animated.setValue(0)
    //   Animated.loop(
    //   Animated.sequence([
    //   Animated.timing(this.animated, {
    //     toValue: 1,
    //     duration: 5000,
    //   }),
    // ]),
    // ).start();
    this.animated5.setValue(0)

  Animated.timing(
    this.animated5,
    {
      toValue: 1,
      duration: 18000,
      easing: Easing.linear
    }
    ).start(() => this.animate5())
    
  }



  render() {
    return (





      <Animatable.View 
      animation="zoomIn"
      iterationCount = {1}
      style={styles.container}>

      <Animated.View style={[{position : 'absolute'},{ translateY: this.translateY }, {translateX: this.translateX}]}>
      <TouchableOpacity >
      <Image source={facebook} style={{width : 30 , height : 30}} />
      </TouchableOpacity>
      </Animated.View>

      <Animated.View style={ [{position: 'absolute'},{ translateY: this.translateY2 }, {translateX: this.translateX2}] }>
      <TouchableOpacity>
      <Image source={instagram} style={{width : 30 , height : 30}} />
      </TouchableOpacity>
      </Animated.View>


      <Animated.View style={ [{position: 'absolute'},{ translateY: this.translateY3 }, {translateX: this.translateX3}] }>
      <TouchableOpacity>
      <Image source={instagram} style={{width : 30 , height : 30}} />
      </TouchableOpacity>
      </Animated.View>

      <Animated.View style={ [{position: 'absolute'},{ translateY: this.translateY4 }, {translateX: this.translateX4}] }>
      <TouchableOpacity>
      <Image source={instagram} style={{width : 30 , height : 30}} />
      </TouchableOpacity>
      </Animated.View>

      <Animated.View style={ [{position: 'absolute'},{ translateY: this.translateY5 }, {translateX: this.translateX5}] }>
      <TouchableOpacity>
      <Image source={instagram} style={{width : 30 , height : 30}} />
      </TouchableOpacity>
      </Animated.View>

        <View >
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>REACT NATIVE</Text>
        </View>
      </Animatable.View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center'
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 7,
  },
  btn: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  }
});

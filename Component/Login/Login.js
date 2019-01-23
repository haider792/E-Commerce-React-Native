// import React, {Component} from 'react';
// import StartUpPage from './Component/Login/StartUpPage'

// export default class App extends Component{
//     render(){
//         return(
//             <StartUpPage></StartUpPage>
//         );
//     }
// }


const React = require('react');
const ReactNative = require('react-native');
const {PanResponder, StyleSheet, Text, View , Animated , Image , TouchableOpacity} = ReactNative;
import Input from '../../CommonComponents/Input';
import * as Animatable from 'react-native-animatable';
// import { Icon } from 'react-native-elements'
import {connect} from 'react-redux';
import type {PanResponderInstance, GestureState} from 'PanResponder';
import type {PressEvent} from 'CoreEventTypes';
import Dimensions from 'Dimensions';
import {signUpAction,loginShutter,signUpShutter} from '../../src/actions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


type CircleStyles = {
  backgroundColor?: string,
  left?: number,
  top?: number,

};



const CIRCLE_SIZE = 80;

type Props = $ReadOnly<{||}>;

class Login extends React.Component<Props> {
  static title = 'PanResponder Sample';
  static description =
    'Shows the Use of PanResponder to provide basic gesture handling';

  _handleStartShouldSetPanResponder = (
    event: PressEvent,
    gestureState: GestureState,
  ): boolean => {
    // Should we become active when the user presses down on the circle?
    return true;
  };

  constructor(props){
      super(props);
      this.state= {
          changeView : false,
          changeAnimatedView : false,
      }
  }
  _handleMoveShouldSetPanResponder = (
    event: PressEvent,
    gestureState: GestureState,
  ): boolean => {
    // Should we become active when the user moves a touch over the circle?
    return true;
  };

  _handlePanResponderGrant = (
    event: PressEvent,
    gestureState: GestureState,
  ) => {
    this.props.loginShutter(false);
    this._highlight();
  };

  _handlePanResponderMove = (event: PressEvent, gestureState: GestureState) => {
    // this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    // this._circleStyles.style.top = this._previousTop + gestureState.dy;
    // this.loginHeight += gestureState.y0
   if(gestureState.moveY > 40){
      if(gestureState.moveY > 45){

        
        Animated.timing(this.loginWidth,{
          toValue:   DEVICE_WIDTH,
          duration : 50
        }).start()

        
      } 
      else if(gestureState.moveY <= 45){

        
        Animated.timing(this.loginWidth,{
          toValue:  DEVICE_WIDTH/2,
          duration : 50
        }).start()

        
        
      }
  


      Animated.spring(this.loginHeight,{
        toValue:   gestureState.moveY,
        duration : 500,
      }).start()

      if(gestureState.moveY >= 200){
        this.setState({changeView : true})
      }else{
        this.setState({changeView : false})
      }


    } 
    this._updateNativeStyles();
  };

  _handlePanResponderEnd = (event: PressEvent, gestureState: GestureState) => {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;

    
    if(gestureState.moveY > 100){
      
      
      Animated.timing(this.loginHeight,{
        toValue:  DEVICE_HEIGHT,
        duration : 500,

      }).start()

      setTimeout(()=>{
      if(gestureState.moveY <= DEVICE_HEIGHT){
        this.setState({changeAnimatedView : true})
      }
    },510)
      
    }
     else if(gestureState.moveY <= 100){

        
        Animated.timing(this.loginHeight,{
            toValue:  40,
            duration : 500,
    
          }).start()

          
        

          Animated.timing(this.loginWidth,{
            toValue:  DEVICE_WIDTH/2,
            duration :50
          }).start()
        
      }



    // Animated.timing(this.loginHeight,{
    //   toValue:DEVICE_HEIGHT,
    //   duration : 1500,
    // }).start()
  };

  _panResponder: PanResponderInstance = PanResponder.create({
    onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
    onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
    onPanResponderGrant: this._handlePanResponderGrant,
    onPanResponderMove: this._handlePanResponderMove,
    onPanResponderRelease: this._handlePanResponderEnd,
    onPanResponderTerminate: this._handlePanResponderEnd,
  });

  _previousLeft: number = 0;
  _previousTop: number = 0;
  _circleStyles: {|style: CircleStyles|} = {style: {}};
  circle: ?React.ElementRef<typeof View> = null;

  UNSAFE_componentWillMount() {
    this._previousLeft = 0;
    this._previousTop = 0;
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: 'green'
      },
    };

    this.loginHeight = new Animated.Value(50)
    this.loginWidth = new Animated.Value(DEVICE_WIDTH/2)

  }

  

  componentDidMount() {
    this._updateNativeStyles();
  }

  decreaseSignUpHeight = () => {

    this.setState({changeAnimatedView : false })
    Animated.timing(this.loginHeight,{
      toValue:  45,
      duration : 500,

    }).start()

    
  

    Animated.timing(this.loginWidth,{
      toValue:  DEVICE_WIDTH/2,
      duration :50
    }).start()


    this.setState({changeView : false})
  }

  _highlight() {
    this._circleStyles.style.backgroundColor = 'blue';
    this._updateNativeStyles();
  }

  _unHighlight() {
    this._circleStyles.style.backgroundColor = 'green';
    this._updateNativeStyles();
  }

  _updateNativeStyles() {
    this.circle && this.circle.setNativeProps(this._circleStyles);
  }

  send(){

  }

  Views(){

    const extOpacity = this.loginHeight.interpolate({
      inputRange : [30 , 200],
      outputRange : [1,0]
    })
    const exttOpacity = this.loginHeight.interpolate({
      inputRange : [200 , DEVICE_HEIGHT],
      outputRange : [0,1]
    })
    if(this.state.changeAnimatedView == false){
        return        <Animated.View
        ref={circle => {
          this.circle = circle;
        }}
        style={[styles.circle , { marginLeft :  this.state.margin, width : this.loginWidth, height : this.loginHeight }]}
        {...this._panResponder.panHandlers}
      >
       { this.state.changeView == false ? <Animated.View style={{opacity : extOpacity}}>
        <View style = {{alignItems : 'center' }}>
        <Text>SignUp</Text>
        </View>
        </Animated.View> :

      <Animated.View style={{opacity : exttOpacity}} > 
              {/* <Icon
                  name='sc-telegram'
                  type='evilicon'
                  color='#517fa4'
                /> */}
                   <View style={{marginBottom : 50,alignItems : 'center'}}>
            <Text style={{fontSize : 50}}>LOGIN</Text>
            </View>
            <Input
                placeholder = "Enter the Name"
                autoCorrect = {true}
                maxLength = {20}
            >
            </Input>
            <Input
                placeholder = "Enter the Name"
                autoCorrect = {true}
                maxLength = {20}
            >
            </Input>
        </Animated.View>
       }        
        </Animated.View>
    }
    else{
      if(this.props.count.loginShutter == 'false'){
        this.decreaseSignUpHeight();
      }
        return <Animated.View style={{width : DEVICE_WIDTH  , height : DEVICE_HEIGHT, justifyContent : 'center' }}>
              {/* <Icon
                  name='sc-telegram'
                  type='evilicon'
                  color='#517fa4'
                /> */}
                
                <Animated.View style={{flex : 1 , marginTop : 20 , marginLeft : 30  }}>
                <TouchableOpacity onPress = {()=> this.decreaseSignUpHeight()}>
                <Text>c--</Text>
                </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{flex : 3 , alignItems : 'center'}}>
                   <Animated.View style={{marginBottom : 50}}>
            <Text style={{fontSize : 50}}>SIGN UP</Text>
            </Animated.View>
            <Input
                placeholder = "Name"
                autoCorrect = {true}
                maxLength = {20}
            >
            </Input>
            <Input
                placeholder = "Email"
                autoCorrect = {true}
                maxLength = {20}
            >
            </Input>
            <Input
                placeholder = "*********"
                autoCorrect = {true}
                maxLength = {20}
            >
            </Input>
            <Input
                placeholder = "confirm password"
                autoCorrect = {true}
                maxLength = {20}
            >
            </Input>
            <TouchableOpacity onPress={()=>{
                          this.props.signUpAction('message working');
                          alert("working");
                    }}>
                      <Text>Login</Text>
            </TouchableOpacity>

                  <Text>{this.props.count.loginShutter}</Text>
            </Animated.View>
        </Animated.View>
    }
  }

  render() {

  // const BeforeWidth = this.loginHeight.interpolate({
  //     inputRange : [100 , DEVICE_HEIGHT],
  //     outputRange : [100,DEVICE_WIDTH]
  // })

  const extOpacity = this.loginHeight.interpolate({
    inputRange : [45 , DEVICE_HEIGHT],
    outputRange : [0,1]
  })

    return (
          this.Views()

    );
  }
}

const styles = StyleSheet.create({
  circle: {
    borderBottomRightRadius: 40,
    borderWidth : 0.5,
    position : 'absolute',
    top: 0,
    justifyContent : 'center',
    alignItems : 'center'
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
});

function mapStateToProps(state){
  return{
    count : state
  }
  }

export default connect(mapStateToProps , {signUpAction,loginShutter,signUpShutter})(Login) 


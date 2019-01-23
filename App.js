import React, {Component} from 'react';
import StartUpPage from './Component/Login/StartUpPage'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import signUpReducer from './src/reducers/signUpReducer';

const  store = createStore(signUpReducer);

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
            <StartUpPage></StartUpPage>
            </Provider>
        );
    }
}


// import React, {Component} from 'react';
// const ReactNative = require('react-native');
// const {PanResponder, StyleSheet, Text, View , Animated , TouchableOpacity, Easing , Button} = ReactNative;
// import {PanResponderInstance, GestureState} from 'PanResponder';
// import {PressEvent} from 'CoreEventTypes';
// import Dimensions from 'Dimensions';


// export default class App extends Component {

//     constructor() {
//         super()
//         this.animated = new Animated.Value(0);
        
//         var range = 1, snapshot = 50, radius = 100;
//         /// translateX
//         var inputRange = [], outputRange = [];
//         for (var i=0; i<=snapshot; ++i) {
//             var value = i/snapshot;
//             var move = Math.sin(value * Math.PI * 2) * radius;
//             inputRange.push(value);
//             outputRange.push(move);
//         }
//         this.translateX = this.animated.interpolate({ inputRange, outputRange });

//         /// translateY
//         var inputRange = [], outputRange = [];
//         for (var i=0; i<=snapshot; ++i) {
//             var value = i/snapshot;
//             var move = -Math.cos(value * Math.PI * 2) * radius;
//             inputRange.push(value);
//             outputRange.push(move);
//         }
//         this.translateY = this.animated.interpolate({ inputRange, outputRange });


//         this.animated2 = new Animated.Value(0);
        
//         var range2 = 1, snapshot2 = 50, radius2 = 100;
  
//         var inputRange = [], outputRange = [];
//         for (var i=0; i<=snapshot2; ++i) {
//             var value = i/snapshot2;
//             var move = -Math.cos(value * Math.PI * 2) * radius2;
//             inputRange.push(value);
//             outputRange.push(move);
//         }
//         this.translateX2 = this.animated2.interpolate({ inputRange, outputRange });

//         var inputRange = [], outputRange = [];
//         for (var i=0; i<=snapshot2; ++i) {
//             var value = i/snapshot2;
//             var move = -Math.sin(value * Math.PI * 2) * radius2;
//             inputRange.push(value);
//             outputRange.push(move);
//         }
//         this.translateY2 = this.animated2.interpolate({ inputRange, outputRange });
//         this.animate();
//         this.animate2();
//     }

//       animate() {
//       //   this.animated.setValue(0)
//       //   Animated.loop(
//       //   Animated.sequence([
//       //   Animated.timing(this.animated, {
//       //     toValue: 1,
//       //     duration: 5000,
//       //   }),
//       // ]),
//       // ).start();
//       this.animated.setValue(0)

//       Animated.timing(
//         this.animated,
//         {
//           toValue: 1,
//           duration: 18000,
//           easing: Easing.linear
//         }
//       ).start(() => this.animate())
//       }


//       animate2() {
//         //   this.animated.setValue(0)
//         //   Animated.loop(
//         //   Animated.sequence([
//         //   Animated.timing(this.animated, {
//         //     toValue: 1,
//         //     duration: 5000,
//         //   }),
//         // ]),
//         // ).start();
//         this.animated2.setValue(0)

//       Animated.timing(
//         this.animated2,
//         {
//           toValue: 1,
//           duration: 18000,
//           easing: Easing.linear
//         }
//         ).start(() => this.animate2())
        
//       }
  

//       render() {
//         // const transform = [{ translateY: this.translateY }, {translateX: this.translateX}];
//         // const transform2 = [{ translateY: this.translateY }, {translateX: this.translateX}];
//                 return (
//           <View style={styles.container}>

//                       <Animated.View style={[{ translateY: this.translateY }, {translateX: this.translateX}]}>
//               <TouchableOpacity style={styles.btn}>
//                 <Text>hallo 2</Text>
//               </TouchableOpacity>
//             </Animated.View>

//           <Animated.View style={ [{ translateY: this.translateY2 }, {translateX: this.translateX2}] }>
//               <TouchableOpacity style={styles.btn}>
//                 <Text>hallo</Text>
//               </TouchableOpacity>
//             </Animated.View>
          
          

//                       <Button title="Test" onPress={() => { 
//               this.animate2() 
//               }} />
//           </View>
//         );
//       }
//     }

//     // define your styles
//     const styles = StyleSheet.create({
//       container: {
//     flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',    
//         backgroundColor: '#2c3e50',
//       },
//       btn: {
//         backgroundColor: 'red',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: 50,
//       }
//     });





// const React = require('react');
// const ReactNative = require('react-native');
// const {PanResponder, StyleSheet, Text, View , Animated} = ReactNative;

// import type {PanResponderInstance, GestureState} from 'PanResponder';
// import type {PressEvent} from 'CoreEventTypes';
// import Dimensions from 'Dimensions';

// const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

// type CircleStyles = {
//   backgroundColor?: string,
//   left?: number,
//   top?: number,

// };

// const CIRCLE_SIZE = 80;

// type Props = $ReadOnly<{||}>;

// export default class App extends React.Component<Props> {
//   static title = 'PanResponder Sample';
//   static description =
//     'Shows the Use of PanResponder to provide basic gesture handling';

//   _handleStartShouldSetPanResponder = (
//     event: PressEvent,
//     gestureState: GestureState,
//   ): boolean => {
//     // Should we become active when the user presses down on the circle?
//     return true;
//   };

//   _handleMoveShouldSetPanResponder = (
//     event: PressEvent,
//     gestureState: GestureState,
//   ): boolean => {
//     // Should we become active when the user moves a touch over the circle?
//     return true;
//   };

//   _handlePanResponderGrant = (
//     event: PressEvent,
//     gestureState: GestureState,
//   ) => {
//     this._highlight();
//   };

//   _handlePanResponderMove = (event: PressEvent, gestureState: GestureState) => {
//     // this._circleStyles.style.left = this._previousLeft + gestureState.dx;
//     // this._circleStyles.style.top = this._previousTop + gestureState.dy;
//     // this.loginHeight += gestureState.y0
//    if(gestureState.moveY > 100){
//       if(gestureState.moveY > 110){

        
//         Animated.timing(this.loginWidth,{
//           toValue:  DEVICE_WIDTH,
//           duration : 30
//         }).start()

        
//       } else if(gestureState.moveY < 110){

        
//         Animated.timing(this.loginWidth,{
//           toValue:  DEVICE_WIDTH/2,
//           duration : 30
//         }).start()

        
//       }
  


//       Animated.spring(this.loginHeight,{
//         toValue:   gestureState.moveY,
//         duration : 500,
//       }).start()
//     } 
//     this._updateNativeStyles();
//   };

//   _handlePanResponderEnd = (event: PressEvent, gestureState: GestureState) => {
//     this._unHighlight();
//     this._previousLeft += gestureState.dx;
//     this._previousTop += gestureState.dy;

    
//     if(gestureState.moveY > 150){
      
      
//       Animated.timing(this.loginHeight,{
//         toValue:  DEVICE_HEIGHT,
//         duration : 500,

//       }).start()

//     }


//     // Animated.timing(this.loginHeight,{
//     //   toValue:DEVICE_HEIGHT,
//     //   duration : 1500,
//     // }).start()
//   };

//   _panResponder: PanResponderInstance = PanResponder.create({
//     onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
//     onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
//     onPanResponderGrant: this._handlePanResponderGrant,
//     onPanResponderMove: this._handlePanResponderMove,
//     onPanResponderRelease: this._handlePanResponderEnd,
//     onPanResponderTerminate: this._handlePanResponderEnd,
//   });

//   _previousLeft: number = 0;
//   _previousTop: number = 0;
//   _circleStyles: {|style: CircleStyles|} = {style: {}};
//   circle: ?React.ElementRef<typeof View> = null;

//   UNSAFE_componentWillMount() {
//     this._previousLeft = 0;
//     this._previousTop = 0;
//     this._circleStyles = {
//       style: {
//         left: this._previousLeft,
//         top: this._previousTop,
//         backgroundColor: 'green'
//       },
//     };

//     this.loginHeight = new Animated.Value(50)
//     this.loginWidth = new Animated.Value(DEVICE_WIDTH/2)

//   }

  

//   componentDidMount() {
//     this._updateNativeStyles();
//   }

//   _highlight() {
//     this._circleStyles.style.backgroundColor = 'blue';
//     this._updateNativeStyles();
//   }

//   _unHighlight() {
//     this._circleStyles.style.backgroundColor = 'green';
//     this._updateNativeStyles();
//   }

//   _updateNativeStyles() {
//     this.circle && this.circle.setNativeProps(this._circleStyles);
//   }

//   render() {

//   // const BeforeWidth = this.loginHeight.interpolate({
//   //     inputRange : [100 , DEVICE_HEIGHT],
//   //     outputRange : [100,DEVICE_WIDTH]
//   // })

//   // const extOpacity = this.loginWidth.interpolate({
//   //   inputRange : [110 , DEVICE_HEIGHT],
//   //   outputRange : [0,1]
//   // })

//     return (
      
//         <Animated.View
//           ref={circle => {
//             this.circle = circle;
//           }}
//           style={[styles.circle , { width : this.loginWidth, height : this.loginHeight }]}
//           {...this._panResponder.panHandlers}
//         >
        
//         <Text>Login</Text>
        
//         </Animated.View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   circle: {
//     borderRadius: CIRCLE_SIZE / 2,
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     justifyContent : 'center',
//     alignItems : 'center'
//   },
//   container: {
//     flex: 1,
//     paddingTop: 64,
//   },
// });


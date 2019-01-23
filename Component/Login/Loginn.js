import React, {Component} from 'react';
import {Text, View , Dimensions , TouchableOpacity , Animated} from 'react-native';
import Input from '../../CommonComponents/Input';
import * as Animatable from 'react-native-animatable';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class Login extends Component{

    componentWillMount(){
        this.loginHeight = new Animated.Value(100)
    }
    increaseHeightOfLogin = () => {
        Animated.timing(this.loginHeight,{
            toValue:DEVICE_HEIGHT,
            duration : 500,
        }).start()
    }

    render(){

        const BeforeheaderTextOpacity = this.loginHeight.interpolate({
            inputRange : [100 , DEVICE_HEIGHT],
            outputRange : [1,0]
        })
        const margintop = this.loginHeight.interpolate({
            inputRange : [100 , DEVICE_HEIGHT],
            outputRange : [25,100]
        })
        const AfterheaderTextOpacity = this.loginHeight.interpolate({
            inputRange : [100 , DEVICE_HEIGHT],
            outputRange : [0,1]
        })
        // const AfterheaderTextOpacity = this.loginHeight.interpolate({
        //     inputRange : [100 , DEVICE_HEIGHT],
        //     outputRange : [0,1]
        // })

        return(
            <Animatable.View 
            animation="slideInUp"
            iterationCount = {1}  
            >          
            <Animated.View                                                                   
            style={{height : this.loginHeight, backgroundColor : '#fff' , justifyContent : 'center' }}
            >
            <TouchableOpacity            
            //pointerEvents in View Make it touchable without giving input in textArea
            onPress = {() => {this.increaseHeightOfLogin()}}>
           <Text style={{font : 20  , color : '#000'}}>LOGIN</Text>
           </TouchableOpacity>
           
            
           
                      
           

            



           <Text style={{font : 10 ,opacity : AfterheaderTextOpacity , color : '#000'}}>LOGIN</Text>
           
           </Animated.View>

            {/* <View style={{marginBottom : 50,alignItems : 'center'}}>
            <Text style={{fontSize : 50}}>LOGIN</Text>
            </View> */}
            {/* <Input
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
            </Input> */}
            </Animatable.View>
        );
    }
}

const styles = {
    Header : {
        
        alignItems : 'center',
        backgroundColor : 'white'
    }
}




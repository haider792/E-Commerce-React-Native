import React,{Component} from 'react';
import {View,Text,Image,PixelRatio, TouchableOpacity} from 'react-native';
import Dimensions from 'Dimensions';


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const remote = 'https://i.pinimg.com/originals/c2/f3/19/c2f319bd8adcff27b88ec1cc9eecd628.jpg';

export default class ListOfProducts extends Component{
    constructor(props){
        super(props)
        this.state = {
            pictureWidth : 0,
            pictureHeight : 0 
        }
    }
    render(){

        if(this.props.index%2 == 0){
         return <View style={{ marginTop : DEVICE_WIDTH - (DEVICE_WIDTH-14) , width : DEVICE_WIDTH/2,  }}>
            <View style={{justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,}}>
            <TouchableOpacity>
            <Image source={{ uri : remote}} style={{width : DEVICE_WIDTH/2.25 , height : DEVICE_HEIGHT/2 , borderRadius: 10 }} imageStyle={{ borderRadius: 10 }} >
            </Image>
            </TouchableOpacity>
            </View>
            </View>
         }else{
            return <View style={{marginTop : DEVICE_WIDTH - (DEVICE_WIDTH-14) , width : DEVICE_WIDTH/2 }}>
            <View style={{justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: 8,
                            paddingRight: 8,}}>
            <TouchableOpacity>
            <Image source={{ uri : remote}} style={{width : DEVICE_WIDTH/2.25 , height : DEVICE_HEIGHT/4 , borderRadius: 10 }} imageStyle={{ borderRadius: 10 }} >
            </Image>
            </TouchableOpacity>
            </View>
            </View>

         }
    }
}
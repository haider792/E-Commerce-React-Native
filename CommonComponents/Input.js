import React from 'react';
import {View,Text,TextInput} from 'react-native';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


export default Input  = (props) => {
    return(
        <View >
        {/* <Text style = {styles.Label}>Name :</Text> */}
        <TextInput 
          style={styles.TextInput}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
          autoCorrect={props.autoCorrect}
          autoCapitalize={props.autoCapitalize}
          returnKeyType={props.returnKeyType}
          placeholderTextColor="#000"
          underlineColorAndroid="transparent"
          onChangeText={props.onChangeText}
          value={props.value}
          maxLength={props.maxLength}
        >
        </TextInput>
        </View>
    );
}

const styles = {
    TextInput : {
        
        color : '#000',
        marginLeft : 10    
    },
    Label : {
        paddingLeft: 40,
        color : '#000',
        marginRight : 10
    },
    Main : {
        backgroundColor : '#777999',
        // flexDirection : 'row',
        margin : 10,
        alignItems : 'center',
        flex : 1,        
        // height : 55,
        borderRadius : 10,
    }
}
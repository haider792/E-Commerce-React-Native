import React, {Component} from 'react';
import {Text, View , Dimensions } from 'react-native';
import BackgroundImage from '../../CommonComponents/BackgroundImage';
import Logo from './Logo';
import Login from './Login';
import SignUp from './SignUp';

export default class App extends Component{
    render(){
        return(
     
                <BackgroundImage >
                    <Logo></Logo>
                    <Login></Login>
                    <SignUp></SignUp>
                </BackgroundImage>
 
        );
    }
}

const styles = {
    Main : {
        flex : 1
    }
}




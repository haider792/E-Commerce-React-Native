import React, { Component } from 'react';
import { Container, Content, Form, Item, Input } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import {TouchableHighlight, Image, View, Button,Text} from 'react-native';
import {add,imageUpload} from '../../src/actions/index';
import {connect} from 'react-redux';
const options=
{
    title: 'Select Photo',

    takePhotoButtonTitle: 'Take Photo…',
    chooseFromLibraryButtonTitle: 'Choose from Gallery',

}

var imageData;

class Formm extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            avatarSource : ''
        }
    }
  
    openGallery = () => {
        ImagePicker.showImagePicker(options, (response) => {
            imageData = response.data;
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
              this.setState({
                avatarSource: source,
              });
            }
          });
    }
    
    render() {
    return (
      <View style={{flex : 1 , justifyContent : 'center'  }}>
        <Form>
            <TouchableHighlight onPress = {()=>this.openGallery()}>
            {
              (this.state.avatarSource != '' || this.state.avatarSource == undefined) ?
                  <Image source={this.state.avatarSource} style={{width : 50 , height : 50}} />
                  : <Text>Select Photo</Text>
            } 
            </TouchableHighlight>
            <Item>
              <Input placeholder="Name Of Product" onChangeText={i => this.setState({name : i})} />
            </Item>
            <Button title= "Submit" onPress={()=>{
            this.props.add(this.state.name,imageData)
            }}></Button>

            <Text>{this.props.product.message}</Text>
            <Text>{this.props.product.name}</Text>
        </Form>
      </View>
      
    );
  }
}

function mapStateToProps(state){
  return{
    product : state.product
  }
  }

export default connect(mapStateToProps , {add,imageUpload})(Formm) 


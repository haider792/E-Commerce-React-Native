// import React,{Component} from  'react';
// import {Text,View} from 'react-native';
// import FlatList from './Flatlist';
// import Masonry from 'react-native-masonry';

// const remote = 'https://i.pinimg.com/originals/c2/f3/19/c2f319bd8adcff27b88ec1cc9eecd628.jpg';

// const productArray = 
//   [{
//     pic : '.png'
//   },
//   {
//     pic : '.png'
//   },
//   {
//     pic : '.png'
//   },
//   {
//     pic : '.png'
//   },
//   {
//     pic : '.png'
//   }
// ]

// class product extends Component {
//   render()
//   {  
//   //  return <FlatList products = {productArray}></FlatList>
// return <View style={{flex : 1}}>
// <Masonry
//   bricks={[
//     { uri: remote },
//     { uri: remote },
//     { uri: remote },
//     { uri: remote },
//     { uri: remote }
  
//   ]}
// />
// </View>  
//   }
// }
// export default product


import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MasonryList from "react-native-masonry-list";
import {  Button, Icon, Fab } from 'native-base';

const data = [
  {
      uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1080, height: 1920 },
  },
  {
      URI: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1080, height: 1920 },
  },
  {
      url: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1080, height: 1920 },
  },
  {
      URL: "https://luehangs.site/pic-chat-app-images/adult-arm-art-326559.jpg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1920, height: 1080 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1920, height: 1080 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/pexels-photo-247292.jpeg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1920, height: 1080 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/pexels-photo-846741.jpeg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1920, height: 1080 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/beautiful-daylight-dress-459947.jpg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1080, height: 1920 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/free-freedom-girl-6480.jpg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1080, height: 1920 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/hair-girl-female-model.jpg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1080, height: 1920 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/pexels-photo-853168.jpeg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1920, height: 1080 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/pexels-photo-904276.jpeg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1920, height: 1080 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/pexels-photo-1059116.jpeg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1920, height: 1080 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/photo-206330.jpeg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1080, height: 1920 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/photo-206381.jpeg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1080, height: 1920 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/photo-755745.jpeg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1080, height: 1920 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/pexels-photo-1104114.jpeg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1920, height: 1080 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/photo-274595.jpeg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1080, height: 1920 },
  },
  {
      uri: "https://luehangs.site/pic-chat-app-images/photo-799443.jpeg",
      id: idGenerator(),
      title: "www.luehangs.site",
      // dimensions: { width: 1080, height: 1920 },
  }
];

function idGenerator() {
  return Math.random().toString(36).substr(2, 9);
}

export default class example extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
          active: 'true'
        };
      }
  render() {
    return (
      // <View >
      // <View style={{justifyContent : 'center' , alignItems : 'center'}}>
      //   <Text>Products</Text>
      // </View>


<View style={{flex : 1}}>
    <View style={{justifyContent : 'center',backgroundColor :'lightblue', alignItems : 'center'}}>
        <Text style={{fontSize : 40}}>Haider</Text>
    </View>
    <MasonryList    
      imageContainerStyle = {{
          borderRadius : 10,
          margin : 10,
          width : '88%'
          }}
      renderIndividualFooter={(data) => {
                        return (<View style={{flexDirection: 'row',backgroundColor : '#000',flex : 1,marginLeft : 10,marginTop : -50,paddingTop : 10,paddingBottom :10, width : '88%', opacity : 0.5,justifyContent : 'space-between'}}>
                                    <View style={{opacity : 1}}>
                                    <TouchableOpacity>
                                        <Text style={{color : 'white'}}>WishList</Text>
                                    </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={{color : 'white'}}>Like</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={{color : 'white'}}>Cart</Text>
                                    </TouchableOpacity>  
                                </View>);
                    }}
      images={data} />
      
      <View >
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
     

      </View>  

    );
  }
}

import React,{Component} from 'react';
import {FlatList,View,Text} from 'react-native';
import ListOfProducts from './ListOfProducts';
import { ScrollView } from 'react-native-gesture-handler';

export default class Flat extends Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ScrollView style={{flex : 1}} >
            {/* <FlatList 
                data={this.props.products}
                numColumns = {2} 
                renderItem={({item,index}) => {
                    return(
                        <ListOfProducts Item = {item}  index = {index}></ListOfProducts>
                    );
                }}
                keyExtractor={(item,index)=>item.pic}
                >
            </FlatList> */}
            {
                this.props.products.map((value , index)=>{
                
                    return<View style={{flex : 1, flexDirection : 'column' , alignSelf : 'flex-start' , alignItems : 'flex-start'}}>
                        <ListOfProducts Item = {value} index = {index}></ListOfProducts>
                    </View>
                })
            }
            
            </ScrollView>

            )
    }
}
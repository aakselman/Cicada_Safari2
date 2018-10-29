import React from 'react';
import { StyleSheet, Text, View,Button, ImageBackground,  TouchableOpacity, Image,ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import CryptoJS from 'crypto-js';

export default class submit extends React.Component 
{
 
  

  render() {
    return (
      
      <ImageBackground  source={require('../assets/image/Submission.png')}  style={styles.container}>

      



        <TouchableOpacity style={styles.button1} onPress={()=>{this.props.navigation.navigate('rank_table');}}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/next_time.png")}/>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button2} onPress={()=>{this.props.navigation.navigate('one_of_4');}}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/sure.png")}/>
        </TouchableOpacity>


      </ImageBackground>



    );
  }
}

const styles = StyleSheet.create({
  container: {
      position:'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%',
    resizeMode: 'stretch',
    backgroundColor:'#ffffff',
  },
 

  button1: {
    position: "absolute",
    borderColor:"#000000",
    left:'55%',
    top:420,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'40%',
    height:'40%',  
  },

  button2: {
    position: "absolute",
    borderColor:"#000000",
    left:'5%',
    top:420,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'40%',
    height:'40%',  
  },

 
});

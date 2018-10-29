import React from 'react';
import { StyleSheet, Text, View,Button, ImageBackground,  TouchableOpacity, Image,ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import CryptoJS from 'crypto-js';

export default class Report_it extends React.Component 
{
  constructor(props) {
    super(props)

    this.state = {
      url: this.props.navigation.state.params.url,
    };
  }


  uploadImage= async() =>{

    let timestamp = (Date.now() / 1000 | 0).toString();
    let api_key = '671676496793175'
    let api_secret = 'YnIumKXw9QLtKqJS4dGEKoYxkSk'
    let cloud = 'cicada-safari'
    let hash_string = 'timestamp=' + timestamp + api_secret
    let signature = CryptoJS.SHA1(hash_string).toString();
    let upload_url = 'https://api.cloudinary.com/v1_1/' + cloud + '/image/upload'
    let xhr = new XMLHttpRequest();
    xhr.open('POST', upload_url);
    xhr.onload = () => {
      console.log(xhr);
    };
    let formdata = new FormData();
    formdata.append('file', {uri: this.state.url, type: 'image/png', name: 'upload.png'});
    formdata.append('timestamp', timestamp);
    formdata.append('api_key', api_key);
    formdata.append('signature', signature);
    xhr.send(formdata);
    this.props.navigation.navigate('submit');
    alert("Upload completed successfully!");
  };

  render() {
    return (
      
      <ImageBackground   style={styles.container}>
          <Image style={{alignContent:"center",top:-35, position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={{uri:this.state.url}}/>    
          <Image style={{alignContent:"center", top:-35, position:"absolute", resizeMode:"stretch" , height:'100%' , width:'110%'}} source={require('../assets/image/report_it.png')}/>
          

      <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/reportit.jpg")}/>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button1} onPress={()=>{this.props.navigation.navigate('Camera');}}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'80%' , width:'80%'}} source={require("../assets/icons/blue_cam.png")}/>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button2} onPress={this.uploadImage}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'80%' , width:'80%'}} source={require("../assets/icons/accept.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3} onPress={()=>{this.props.navigation.navigate('home');}}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'80%' , width:'80%'}} source={require("../assets/icons/cancel.png")}/>
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
  button: {
    position: "absolute",
    borderColor:"#000000",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    right:0,
    top:0,
    width:'100%',
    height:65,  
  },

  button3: {
    position: "absolute",
    borderColor:"#000000",
    left:'68%',
    top:510,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'25%',
    height:'25%',  
  },

  button2: {
    position: "absolute",
    borderColor:"#000000",
    left:'38%',
    top:510,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'25%',
    height:'25%',  
  },

  button1: {
    position: "absolute",
    borderColor:"#000000",
    left:'8%',
    top:510,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'25%',
    height:'25%',  
  },
  
});

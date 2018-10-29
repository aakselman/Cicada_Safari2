import React from 'react';
import { StyleSheet, Text, View,Button, ImageBackground,  TouchableOpacity, Image,AsyncStorage} from 'react-native';
import User from "../components/User";

export default class Signup extends React.Component 
{

  constructor() 
  {
    super()

    User.currentUser.Username= "aakselman1989";
    User.currentUser.Rank_C=79;
    User.currentUser.Country="Israel";
    User.currentUser.Rank_O=150;
    User.currentUser.origin="Email"


    
  }

  facebook_login=()=>
  {
    this.props.navigation.navigate('home');
  };


  local_stor_save=()=>
  {
    alert("inside save");

    
      try {
        AsyncStorage.setItem('artur', 'Akselman');
        alert("we saved it")
      } catch (error) {
        alert(error.toString());
      }
  
  }

  local_stor_ch=()=>
  {
    alert("inside ch");
      alert("1");
      try {
        const value = AsyncStorage.getItem('artur');
        alert("inside ch2");
        if (value !== null) {
          // We have data!!
          alert("inside ch3");
        alert(value.value);
              }
       } catch (error) 
       {
        alert("inside ch4");
         alert(error.toString());
         // Error retrieving data
       }
       alert("inside ch5");

    
    
  };

  render() {
    return (
      
      <ImageBackground source={require('../assets/image/Signup.jpg')} style={styles.container}>
      
      <TouchableOpacity style={styles.button} onPress={()=>{this.local_stor_ch()}}>
          <Image style={{alignContent:"center", height:100 , width:170}} source={require("../assets/image/insta.jpg")}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={()=>{this.local_stor_save()}}>
          <Image style={{alignContent:"center", height:100 , width:170}} source={require("../assets/image/gmail.jpg")}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2 } onPress={()=>{this.facebook_login()}}>
          <Image style={{alignContent:"center", height:100 , width:170}} source={require("../assets/image/facebook.jpg")}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3} onPress={()=>{this.props.navigation.navigate('register');}}>
          <Image style={{alignContent:"center", height:100 , width:170}} source={require("../assets/image/mail.jpg")}/>
        </TouchableOpacity>

      </ImageBackground>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: "absolute",
    borderColor:"#000000",
    right:190,
    top:405,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width:170,
    height:100,  
  },
  button1: {
    position: "absolute",
    borderColor:"#000000",
    right:10,
    top:510,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width:170,
    height:100,  
  },
  button2: {
    position: "absolute",
    borderColor:"#000000",
    right:10,
    top:405,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width:170,
    height:100,  
  },
  button3: {
    position: "absolute",
    borderColor:"#000000",
    right:190,
    top:510,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width:170,
    height:100,  
  },

});

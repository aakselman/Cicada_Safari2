import React from 'react';
import { StyleSheet, Text, View,Button, ImageBackground,  TouchableOpacity, Image,ScrollView,Linking} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import User from "../components/User";


export default class user_screen extends React.Component 
{
 
  constructor() 
  {
    super()
    this.user_info=
    {
      Username:User.currentUser.Username,
      Country: User.currentUser.Country,
      Rank_O: User.currentUser.Rank_O,
      Rank_C: User.currentUser.Rank_C
    }
  }

  loginfunc=()=>
  {
    this.props.navigation.navigate('Signup');
  };

  render() {
    return (
      
      <ImageBackground  source={require('../assets/image/user_screen.png')}  style={styles.container}>

      


        <TouchableOpacity style={styles.button1} onPress={()=>{    this.props.navigation.navigate('user_screen2');}}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/settings.png")}/>
        </TouchableOpacity>

        <Text style={{fontSize:23, fontFamily:"ariel",top:260,position:"absolute"}} >{this.user_info.Username}</Text>

        <Text style={{fontSize:20, fontFamily:"ariel",top:300,position:"absolute"}} >Overall: Rank {this.user_info.Rank_O} | Ohio: Rank {this.user_info.Rank_C}</Text>



          
          <View style={[{ position:"absolute", bottom:0, width: '100%', height:80, backgroundColor:'#fffff',borderColor:"#000000",borderWidth: 0.5,}]}>
       
       <TouchableOpacity style={styles.button3} onPress={()=>{Linking.openURL('http://faculty.msj.edu/kritskg/cicada/site/cicada_home.html')}}>
         <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/info.jpg")}/>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button4} onPress={()=>{this.props.navigation.navigate('user_screen');}}>
         <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/user.jpg")}/>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button5} onPress={()=>{this.props.navigation.navigate('Camera');}}>
         <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/camera.jpg")}/>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button6} onPress={()=>{this.props.navigation.navigate('map');}}>
         <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/map.jpg")}/>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button7} onPress={()=>{this.props.navigation.navigate('home');}}>
         <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/report.png")}/>
       </TouchableOpacity>

      
       </View>


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
    left:'2%',
    top:-21,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'16%',
    height:'16%',  
  },

  button3: {
    position: "absolute",
    borderColor:"#000000",
    bottom:12,
    left:-30,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'35%',
    height:55,  
  },


  button4: {
    position: "absolute",
    borderColor:"#000000",
    bottom:12,
    left:40,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'35%',
    height:55,  
  },


  button5: {
    position: "absolute",
    borderColor:"#000000",
    bottom:12,
    left:110,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'35%',
    height:55,  
  },


  button6: {
    position: "absolute",
    borderColor:"#000000",
    bottom:12,
    left:180,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'35%',
    height:55,  
  },

  button7: {
    position: "absolute",
    borderColor:"#000000",
    bottom:12,
    left:250,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'35%',
    height:55,  
  },



 
});

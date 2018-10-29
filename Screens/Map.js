import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground,  TouchableOpacity, Image,Linking } from "react-native";

import FetchLocation from "../components/FetchLocation";
import UsersMap from "../components/UsersMap";
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
export default class map_temp extends React.Component 
{
  
  state = {
    userLocation: null,
    usersPlaces: []
  };

  getUserLocationHandler = () => {

    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
  .then(data => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421
          }
        });
        fetch("https://pwaguide-f8cf3.firebaseio.com/places.json", {
          method: "POST",
          body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      },
      err => console.log(err)
    );
  }).catch(err => {
    // The user has not accepted to enable the location services or something went wrong during the process
    // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
    // codes : 
    //  - ERR00 : The user has clicked on Cancel button in the popup
    //  - ERR01 : If the Settings change are unavailable
    //  - ERR02 : If the popup has failed to open
  });
    
  };

  getUserPlacesHandler = () => {
    fetch("https://pwaguide-f8cf3.firebaseio.com/places.json")
      .then(res => res.json())
      .then(parsedRes => {
        const placesArray = [];
        for (const key in parsedRes) {
          placesArray.push({
            latitude: parsedRes[key].latitude,
            longitude: parsedRes[key].longitude,
            id: key
          });
        }
        this.setState({
          usersPlaces: placesArray
        });
      })
      .catch(err => console.log(err));
  };


  componentDidMount(){
    this.getUserLocationHandler();
  }

  render() {
    return (
        <View  style={styles.container}>

     
     <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , right:0, top:400,height:65,  width:'100%'}} source={require("../assets/icons/magicada.jpg")}/>

     
<UsersMap
  userLocation={this.state.userLocation}
  usersPlaces={this.state.usersPlaces}
/>

      <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/sogthings.jpg")}/>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button1} onPress={()=>{alert("you clicked me")}}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'80%' , width:'80%'}} source={require("../assets/icons/plus.png")}/>
        </TouchableOpacity>


        
<View  style ={{position:"absolute" ,left:'35%',top:470}}>
      <FetchLocation onGetLocation={this.getUserLocationHandler} />
</View>

        <TouchableOpacity style={styles.button2} onPress={()=>{alert("you clicked me")}}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'80%' , width:'80%'}} source={require("../assets/icons/minus.png")}/>
        </TouchableOpacity>




        
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



      </View>

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

button1: {
  position: "absolute",
  borderColor:"#000000",
  left:'75%',
  top:470,
  borderColor: '#d6d7da',
  alignContent:'center',
  width:'15%',
  height:'10%',  
},

button2: {
  position: "absolute",
  borderColor:"#000000",
  left:'10%',
  top:470,
  borderColor: '#d6d7da',
  alignContent:'center',
  width:'15%',
  height:'10%',  
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
button8: {
  position: "absolute",
  borderColor:"#000000",
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: '#d6d7da',
  right:0,
  top:430,
  width:'100%',
  height:65,  
},


});

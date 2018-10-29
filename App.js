import React from 'react';
import { StyleSheet, Text, View,Button, ImageBackground} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Signup from './Screens/Signup';
import Home from './Screens/Home';
import map from "./Screens/Map";
import Report_it from "./Screens/Report_it";
import submit from "./Screens/Submit";
import one_of_4 from "./Screens/1of4";
import two_of_4 from "./Screens/2of4";
import three_of_4 from "./Screens/3of4";
import four_of_4 from "./Screens/4of4";
import rank_table from "./Screens/Rank_table";
import user_screen from "./Screens/user_screen";
import user_screen2 from "./Screens/user_screen2";
import Camera from "./Screens/Camera";
import register from "./Screens/register";

class App extends React.Component 
{
  render(){
    return (

      <ImageBackground source={require('./assets/image/Home.jpg')} style={styles.container}>
      <View style={[{position:"absolute", top:420, right:70, width: "60%"}]}>
          <Button title="Sign up" onPress={()=>{this.props.navigation.navigate('Signup');}} color="#408ac9"/>
      </View>
      <View style={[{ position:"absolute", top:530, right:70, width: "60%"}]}>
        <Button title="Log in" onPress={()=>{this.props.navigation.navigate('register');}} color="#408ac9"/>
      </View>
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
});


export default createStackNavigator
({
  Home:{ 
    screen:App
  },
  Signup:{
    screen:Signup
  },
  home:{
    screen:Home
  },
  map:{
    screen:map
  },
  report:{
    screen:Report_it
  },
  submit:{
    screen:submit
  },
  one_of_4:
  {
    screen:one_of_4
  },
  two_of_4:{
    screen:two_of_4
  },
  three_of_4:{
    screen:three_of_4
  },
  four_of_4:{
    screen:four_of_4
  },
  rank_table:{
    screen:rank_table
  },
  user_screen:{
    screen:user_screen
  },
  user_screen2:{
    screen:user_screen2
  },
  
  Camera:{
    screen:Camera

  },
  register:{
    screen:register
  }

});



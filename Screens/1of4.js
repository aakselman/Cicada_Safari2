import React from 'react';
import { StyleSheet, Text, View,Button, ImageBackground,  TouchableOpacity, Image,ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import User from "../components/User";

var radio_props = [
    {label: '100<', value: '100<' },{label: '100>', value: '100>' },{label: 'none', value: 'none' }
  ];

export default class one_of_4 extends React.Component 
{
  constructor() 
  {
    super()
    User.Answers.three='100<';
  }


  onSelect = ( item ) => 
  {
    User.Answers.three=item;
  };



  
  render() {
    return (
<ImageBackground  style={styles.container}> 

<View style={{alignContent:"center",top:65, position:"absolute", height:'55%' , width:'120%'}}>
    <Image style={{alignContent:"center", position:"absolute", resizeMode:"stretch" , height:'100%' , width:'100%'}} source={require('../assets/cicadas/nymph.jpg')}/>    

</View>

<Image style={{alignContent:"center", top:-140, position:"absolute", resizeMode:"stretch" , height:'100%' , width:'110%'}} source={require('../assets/image/report_it.png')}/>

<TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
    <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/1of4.jpg")}/>
  </TouchableOpacity>

    <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" ,top:220, height:'80%' , width:'80%'}} source={require("../assets/icons/empty.png")}/>
   
    <Text style={{fontSize:20, fontFamily:"ariel",top:454,position:"absolute"}}    >Nymph</Text>
    
    <TouchableOpacity style={styles.button1} onPress={()=>{alert("you clicked me")}}>
             <Button title="1/4>" onPress={()=>{this.props.navigation.navigate('two_of_4');}}  color="#408ac9"/>
    </TouchableOpacity>

    <View>
        <RadioForm

        style={{top:220}}
          radio_props={radio_props}
          initial={0}
          itemShowKey="label"
          itemRealKey="value"
          onPress={(item) => onSelect(item)}
          formHorizontal={true}
          labelHorizontal={false}
        />
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
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        right:"20%",
        top:570,
        width:'60%',
        height:35, 
    },
  
   
    
  });
  
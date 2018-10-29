import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class Login extends React.Component 
{
    register =   () => 
    {
        alert("asdasdasdas");

        //alert(this.state.Username);
        /*fetch('http://localhost/Registeration', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({Username: , Password: , email: })
      })
          .then((response) => response.json())
          .then((responseJson) => {
       Alert.alert("Author name at 0th index:  " + responseJson[0].name);
          })
          .catch((error) => {
            console.error(error);
          });*/
      };

    render() {
        return (
            <ImageBackground source={require('../assets/image/register.jpg')} style={styles.container}>
            <View  style={{top:310, position:"absolute",height:"100%"}}>

            <View style={{width:150,top:270, alignContent:"center", alignSelf:"center"}} >
                <Button  title="Register" onPress={()=>{this.register()}}  />        
            </View>

            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{top:0, fontSize: 27}}>
                    Register New User
                </Text>
                <TextInput onChangeText={(value) => this.setState({Username: value})}  clearTextOnFocus={true} style={styles.input}  maxLength={10} placeholder='Username' />
                <TextInput onChangeText={(value) => this.setState({Password: value})}  clearTextOnFocus={true} style={styles.input} maxLength={10} placeholder='Password' />
                <TextInput onChangeText={(value) => this.setState({email: value})}  clearTextOnFocus={true} style={styles.input}  placeholder='email' />
                  </ScrollView>

                 
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
    input:{
        height: 36,
        width:200,
        padding: 10,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#48BBEC',
        backgroundColor: '#dbf3b0',
    },
  });
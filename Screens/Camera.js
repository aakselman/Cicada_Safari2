import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,View,Image} from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export default class Camera extends Component 
{
  constructor()
  {
    super();
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
      .then(data => {}).catch(err => {});
  }


  render() {
    return (
      <View style={styles.container}>
     
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes)
            }}
        />
         <TouchableOpacity style={styles.button1} onPress={this.takePicture.bind(this)}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'80%' , width:'80%'}} source={require("../assets/icons/blue_cam.png")}/>
        </TouchableOpacity>

      
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, skipProcessing:true };
      const data = await this.camera.takePictureAsync(options)
      this.props.navigation.navigate('report', {url: data.uri})
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
    button1: {
    position: "absolute",
    borderColor:"#000000",
    left:'35%',
    top:450,
    alignContent:'center',
    width:'35%',
    height:'35%',  
  },
});

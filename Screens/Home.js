import React from 'react';
import { StyleSheet, Text, View,Button, ImageBackground,  TouchableOpacity, Image,ScrollView,Linking} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Home extends React.Component {

  loginfunc=()=>
  {
    this.props.navigation.navigate('Signup');
  };

  render() {
    return (
      
      <ImageBackground  style={styles.container}>

      <View style={{alignContent:"center",top:65, position:"absolute", height:'65%' , width:'120%'}}>
          <Swiper style={styles.wrapper} showsButtons={true}>
              <View style={styles.slide1}>
                    <Image style={{alignContent:"center", position:"absolute", resizeMode:"stretch" , height:'100%' , width:'100%'}} source={require('../assets/gallery/1.jpg')}/>
              </View>
              <View style={styles.slide2}>
                     <Image style={{alignContent:"center", position:"absolute", resizeMode:"stretch" , height:'100%' , width:'100%'}} source={require('../assets/gallery/2.jpeg')}/>
              </View>
              <View style={styles.slide3}>
                    <Image style={{alignContent:"center", position:"absolute", resizeMode:"stretch" , height:'100%' , width:'100%'}} source={require('../assets/gallery/3.jpg')}/>
              </View>
              <View style={styles.slide3}>
                    <Image style={{alignContent:"center", position:"absolute", resizeMode:"stretch" , height:'100%' , width:'100%'}} source={require('../assets/gallery/4.jpg')}/>
              </View>
              <View style={styles.slide3}>
                    <Image style={{alignContent:"center", position:"absolute", resizeMode:"stretch" , height:'100%' , width:'100%'}} source={require('../assets/gallery/5.jpg')}/>
              </View>
              <View style={styles.slide3}>
                    <Image style={{alignContent:"center", position:"absolute", resizeMode:"stretch" , height:'100%' , width:'100%'}} source={require('../assets/gallery/6.jpg')}/>
              </View>
              <View style={styles.slide3}>
                   <Image style={{alignContent:"center", position:"absolute", resizeMode:"stretch" , height:'100%' , width:'100%'}} source={require('../assets/gallery/7.jpg')}/>
              </View>
        </Swiper>
       </View>


      
        <Image style={{alignContent:"center", top:-90, position:"absolute", resizeMode:"stretch" , height:'100%' , width:'110%'}} source={require('../assets/image/report_it.png')}/>

      <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/more.jpg")}/>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button1} onPress={()=>{alert("you clicked me")}}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/left.png")}/>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button2} onPress={()=>{alert("you clicked me")}}>
          <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/right.png")}/>
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
    left:'44%',
    top:480,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'30%',
    height:50,  
  },

  button2: {
    position: "absolute",
    borderColor:"#000000",
    left:'24%',
    top:480,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'30%',
    height:50,  
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




  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

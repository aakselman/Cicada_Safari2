import React from 'react';
import { StyleSheet, Text, View,Button, ImageBackground,  TouchableOpacity, Image,ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { Table, TableWrapper, Row } from 'react-native-table-component';




export default class rank_table extends React.Component 
{

  constructor() {
    super();
    this.state = {
      tableHead: ['Username', 'Points'],
      widthArr: [150, 150]
    }
  }



  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 2; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }
    
    return (
      
      <ImageBackground  source={require('../assets/image/rank_table.png')}  style={styles.container1}>

        <TouchableOpacity style={styles.button1} onPress={()=>{this.props.navigation.navigate('home');}}>
            <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/report.png")}/>
        </TouchableOpacity>
       
       

        <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={{height:240, top:310}}>
            
            <ScrollView style={styles.dataWrapper}>
              <Table  borderStyle={{borderColor: '#C1C0B9', height:200}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>

        <TouchableOpacity style={styles.button2} onPress={()=>{this.props.navigation.navigate('home');}}>
        <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/overall.png")}/>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button3} onPress={()=>{this.props.navigation.navigate('home');}}>
            <Image style={{alignContent:"center", position:"absolute", resizeMode:"contain" , height:'100%' , width:'100%'}} source={require("../assets/icons/by_state.png")}/>
        </TouchableOpacity>

      </ImageBackground>



    );
  }
}

const styles = StyleSheet.create({

    container: { flex: 1, padding: 16, paddingTop: 30},
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 20, backgroundColor: '#E7E6E1' },

  container1: {
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
    left:'44%',
    top:563,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'12%',
    height:'12%',  
  },

  button2: {
    position: "absolute",
    borderColor:"#000000",
    left:'52%',
    top:260,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'40%',
    height:'20%',  
  },

  button3: {
    position: "absolute",
    borderColor:"#000000",
    left:'8%',
    top:260,
    borderColor: '#d6d7da',
    alignContent:'center',
    width:'40%',
    height:'20%',  
  },

 
});

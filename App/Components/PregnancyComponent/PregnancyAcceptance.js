import React, { Component } from 'react';

import {
    Image,
    View,
    Text,
    Dimensions,
    AsyncStorage,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import {Button } from 'native-base';

import { Actions } from 'react-native-router-flux';
import Header from "../Common/Header"
import COLORS from '../../Constants/Colors';
const { width, height } = Dimensions.get('window');
import Colors from "../../Constants/Colors"

export default class PregnancyAcceptance extends Component {

    constructor() {
        super();
        this.state = {
           selectedPregnancyTab:""
        };
    }

  componentWillMount() {
  }

  onPress(){
    //   this.setState({selectedPregnancyTab:"Yes"})
    //    alert("Yes")
       this.setState({selectedPregnancyTab:"Yes"})
  }

  onPressNo(){
    this.setState({selectedPregnancyTab:"No"})
    //   alert("NO")
  }
 render() {
        return (
            <View style ={{flex:1}}> 
            <Header headerText={"SERVICE PREFERENCES"}/>
            <View style={{flex:1,backgroundColor:COLORS.BACKGROUND_COLOR_GENERAL}}>
            <View style={{marginTop:100,justifyContent:"center",alignItems:"center"}}> 
            <Image source={require('../../Assets/pregnant.png')}/> 
            </View>
            <Text style={{margin:20,textAlign:"center",fontSize:20,fontFamily: 'Roboto'}}>ARE YOU PREGNANT</Text>

            {/* <View style={{flexDirection:"row", borderRadius:45,backgroundColor:"white",marginLeft:20,marginRight:20}}>

             <Button rounded  style={{width:width/1.9,justifyContent:"center",alignItems:"center",backgroundColor:"#84432d",padding:0}} onPress={()=>{Actions.servicePreferences()}}>
             <Text style={{color:"black",textAlign:"center",fontWeight:"400", fontSize: 16}}>YES</Text>
             </Button>
             <Text style={{color:"black"}}>NO</Text> */}

             {/* <Button rounded  style={{width:width/1.9,justifyContent:"center",alignItems:"center",backgroundColor:"white",padding:0}} onPress={()=>{Actions.servicePreferences()}}>
             <Text style={{color:"white",textAlign:"center",fontWeight:"400", fontSize: 16}}>NO</Text>
             </Button> */}
             {/* </View> */}

             <ImageBackground  source={require('../../Assets/btn_bg.png') }
             style={{width:width/1.1,marginLeft:20}}>
             <View style={{flexDirection:"row"}}>
            
           {this.state.selectedPregnancyTab=="Yes"}?  <TouchableOpacity
            onPress={this.onPress}><Text style={{justifyContent:"space-around",paddingTop:16,paddingBottom:16,paddingLeft:width/4.5,fontFamily:'Roboto'}}>YES</Text></TouchableOpacity>
            : <ImageBackground  source={require('../../Assets/sel_btn_bg.png')}  style={{width:width/2,position:"absolute",left:0,justifyContent:"center"}} >
             <Text style={{justifyContent:"center",textAlign:"center",  alignItems:"center", paddingTop:16,paddingBottom:16,fontFamily:'Roboto'}}> YES </Text>
             </ImageBackground>

            {this.state.selectedPregnancyTab=="No"}  ? <ImageBackground  source={require('../../Assets/sel_btn_bg.png')}  style={{width:width/2,position:"absolute",right:0,justifyContent:"center"}} >
             <TouchableOpacity
             onPress={this.onPressNo}
             >
             <Text style={{justifyContent:"center",textAlign:"center",  alignItems:"center", paddingTop:16,paddingBottom:16,fontFamily:'Roboto'}}> NO</Text>
             </TouchableOpacity>
             </ImageBackground> :  <Text style={{justifyContent:"space-around",paddingTop:16,paddingBottom:16,paddingLeft:width/1.5,fontFamily:'Roboto'}}>NO</Text>
             </View>
             </ImageBackground>
             
              {/* <ImageBackground  source={require('../../Assets/btn_bg.png') }
             style={{width:width/1.1,marginLeft:20}}>
             <View style={{flexDirection:"row",width:width/1.1}}>
             <ImageBackground  source={require('../../Assets/sel_btn_bg.png')}  style={{width:width/2,position:"absolute",left:0,justifyContent:"center"}} >
             <Text style={{justifyContent:"center",textAlign:"center",  alignItems:"center", paddingTop:16,paddingBottom:16,fontFamily:'Roboto'}}> YES </Text>
             </ImageBackground>
         
             <Text style={{justifyContent:"space-around",paddingTop:16,paddingBottom:16,paddingLeft:width/1.5,fontFamily:'Roboto'}}>NO</Text></View>
            </ImageBackground> */}
             </View>

              </View>
          
         
        );
    }

}


const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
         justifyContent: 'center',
        //   alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
  
      }

  });
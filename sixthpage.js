import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

class sixthpage extends React.Component {
  
  render() {
   
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, //對齊上面
          }}
        />
        <View>
          <ImageBackground
            style={styles.background}
            source={require("./assets/background.png")}
          > 
              {/*upperline (refresh and save) */}
              <View style={{flexDirection : "row",marginTop : "4%",marginLeft : "4%"}}>
                <TouchableOpacity>
                    <Text style={styles.text}>Refresh</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
              </View>      

                {/********************/}
                {/*put your code here*/}  
                {/********************/}

            </ImageBackground>

            <View style={{flexDirection : "row",marginTop : "8%", marginLeft : "12%"}}>
                {/*home button */}
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.navigate("mainpage");
                }}>
                <View  style={styles.home}> 
                    <Entypo name="home" size={24*rem} color="white" /> 
                </View> 
                </TouchableOpacity>
                {/*right button */}
                <View  style={styles.button}> 
                <Ionicons name="person" size={24*rem} color="#EFEFEF" />
                    <Text style={styles.buttontext}>Put the model in your photo</Text> 
                </View> 
            </View>
          </View>
      </View>
    );
  }
}
  


export default sixthpage;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const rem = windowWidth / 380;

const styles = StyleSheet.create({
  //style for upperline
  background : {
    height : 8.6*windowHeight/10,
    width : windowWidth,
  },
  text : {
    marginLeft : "8%",
    marginRight : "46%",
    fontSize : 18*rem,
    color : "#484848",
    fontWeight : "bold",
  },

  //put the styles you defined here

  //style for home button
  home : {
    backgroundColor :"#7FA6A6",
    width : "66%",
    height : "24%",
    marginRight : "16%",
    borderRadius: 10 * rem,
    justifyContent: "center",
    alignItems: "center",  
 },
 //style for right button
 button :{
    padding : "2%",
    flexDirection : "row",
    backgroundColor :"#00000029",
    marginLeft : "6%",
    width : "64%",
    height : "24%",
    borderRadius: 10 * rem,
    justifyContent: "center",
    alignItems: "center",  
 },
 buttontext : {
    color : "#EFEFEF",
    fontSize : 12*rem,
    marginLeft : "4%",
 },
});

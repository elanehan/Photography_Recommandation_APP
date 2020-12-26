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
  TouchableHighlight,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ImageView from 'react-native-image-view';

/* 以下是為了save 但沒用了 */
/*
import * as FileSystem from 'expo-file-system';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
*/

class sevenpage extends React.Component {
  

  constructor(props) {
    super(props);

    this.state = {
        imageIndex: 0,
        isImageViewVisible: false,

        /*
        hasPermission: null,
        cameraType: Camera.Constants.Type.back,
        takePic: true
        */
        }  
  };




  /*
  async componentDidMount() {

    this.getPermissionAsync()

  }

  getPermissionAsync = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasPermission: status === 'granted' });
    MediaLibrary.requestPermissionsAsync();
  }


  takePicture = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({ skipProcessing: true });
      let downloadResumable = FileSystem.createDownloadResumable('https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg', 
      photo.uri)
      const { uri } = await downloadResumable.downloadAsync();
      MediaLibrary.saveToLibraryAsync(photo.uri);
    } 
  }
  */



  render() {
    const {isImageViewVisible, imageIndex} = this.state;
    const images = [this.props.route.params?.someParam ?? 'defaultValue'];
    const isFocused  = this.props.navigation.isFocused();

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
              {/*upperline (back and save) */}
              <View style={{flexDirection : "row",marginTop : "4%",marginLeft : "6%"}}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("fifthpage");}}>
                  <Ionicons name="arrow-back" size={26*rem} color="#484848" />
                </TouchableOpacity>

                
                <View style={{opacity: 0}} onPress={()=>{}}>
                    <Text style={styles.text}>Save</Text>
                </View>
              
              </View>      

              {images.map((image, index) => (
                      <TouchableHighlight
                          key={image.title}
                          style={styles.ImageButton}
                          onPress={() => {
                              this.setState({
                                  imageIndex: index,
                                  isImageViewVisible: true,
                              });
                          }}
                      >
                      <View style={styles.slide1}>
                          <Image source={image.source} style={styles.image}></Image>
                      </View>
                      </TouchableHighlight>
                  ))}

              <ImageView
                  glideAlways
                  images={images}
                  imageIndex={imageIndex}
                  animationType="fade"
                  isVisible={isImageViewVisible}
                  renderFooter={this.renderFooter}
                  onClose={() => this.setState({isImageViewVisible: false})}
                  onImageChange={index => {
                      console.log(index);
                  }}
              />

              
              </ImageBackground> 
                
          </View>
      </View>
    );
  }
}
  

export default sevenpage;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const rem = windowWidth / 380;

const styles = StyleSheet.create({
  //style for upperline
  background : {
    height : windowHeight,
    width : windowWidth,
  },
  text : {
    marginLeft : "78%",
    fontSize : 18*rem,
    color : "#484848",
    fontWeight : "bold",
  },

  //put the styles you defined here

  //style for home button
  home : {
    backgroundColor :"#7FA6A6",
    width : "68%",
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
    backgroundColor :"#484848",
    marginLeft : "8%",
    width : "80%",
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

 slide1: {

  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',

  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.4,
  shadowRadius: 5,
  elevation: 7,
  },
  image: {
  height: '95%',
  width: '93%',
  resizeMode: 'cover'
  },
  ImageButton: {
    marginTop: '10%',
    marginLeft: "10%",
    height: '70%',
    width: '80%',
  }

});

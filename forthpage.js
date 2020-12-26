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
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';


//add
function Img(props) {
  const [selectedImage, setSelectedImage] = React.useState(null);
  this.setSelectedImage({ localUri: pickerResult.uri });
  if (this.selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }
}
//add

class forthpage extends React.Component {

  //add
  constructor(props){
    super(props);
    this.state = {
        Male:0,
        Female:0,
        one:0,
        two:0,
        three:0,
        more:0,
        background_img: 'null'
    };
  }


  set_num(number){
    const {num_of_people} = this.state;
    this.setState({num_of_people : number});
    //alert('number of people：' + number);
  }
  //add

  render() {
   
  //add
    let openCameraPickerAsync = async () => {
    
      let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }else{
        let pickerResult = await ImagePicker.launchCameraAsync();
        this.setState({background_img: pickerResult.uri})
        console.log(pickerResult);
      } 
    };

    let openImagePickerAsync = async () => {
    
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access gallery is required!');
        return;
      }else{
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        this.setState({background_img: pickerResult.uri})
        console.log(pickerResult);
      }
    };
  //add

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
              {/*upperline (back icon and search) */}
              <View style={{flexDirection : "row",marginTop : "4%",marginLeft : "4%"}}>
                <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("mainpage");
              }}>
                  <Ionicons name="arrow-back" size={26*rem} color="#484848" />
                </TouchableOpacity>
                <Text style={styles.text}>SEARCH</Text>
              </View>                
            </ImageBackground>

            {/********************/}
            {/*put your code here*/}  
            <View style={{alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:17, color:'#ccc'}}>Choose the tags you want !</Text>
            </View>
 
            <View style={{marginLeft:'7%'}}>
              <Text style={styles.tital}>Gender</Text>
            </View>
          
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => this.setState({Male: this.state.Male==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.Male==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.Male==0?'#000':'white'}]}>
                  Male
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({Female: this.state.Female==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.Female==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.Female==0?'#000':'white'}]}>
                  Female
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft:'7%'}}>
              <Text style={styles.tital}>Number of people</Text>
            </View>

            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => this.setState({one: this.state.one==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.one==0 ? '#ccc':'#ABDB8A'}]}>
              <Text style={[styles.buttonText,{color:this.state.one==0?'#000':'white'}]}>
                  1
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({two: this.state.two==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.two==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.two==0?'#000':'white'}]}>
                    2
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({three: this.state.three==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.three==0 ? '#ccc':'#ABDB8A'}]}>
              <Text style={[styles.buttonText,{color:this.state.three==0?'#000':'white'}]}>
                  3
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({more: this.state.more==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.more==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.more==0?'#000':'white'}]}>
                    more
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={{marginLeft:'7%'}}>
              <Text style={styles.tital}>Scene</Text>
            </View>

            <View style={styles.picture}>
              <Image source={{uri:this.state.background_img}} style={{ width: 230, height: 160}} />
            </View>

          {/*  分gallery & camera  */}
            <View style={{marginTop:'1%',alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:15, color:'#bbb'}}>Upload your background picture</Text>
            </View>

            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={openCameraPickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Camera</Text>
              </TouchableOpacity>
            </View>
          
          {/*  一個按鈕:gallery 
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Upload your background picture</Text>
              </TouchableOpacity>
            </View>
          */}  
            {/********************/}

            {/*submit button */}
            <View>
              <TouchableOpacity 
                onPress={() => {
                  this.props.navigation.navigate("fifthpage");
                }}>
                <View  style={styles.submit}> 
                  <Text style={styles.submittext}>Submit</Text> 
                </View> 
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}
  


export default forthpage;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const rem = windowWidth / 380;

const styles = StyleSheet.create({
  //style for upperline
  background : {
    height : windowHeight/14,
    width : windowWidth,
  },
  text : {
    marginLeft : "30%",
    fontSize : 18*rem,
    color : "#484848",
    fontWeight : "bold",
  },

  //put the styles you defined here
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom_container:{
    margin:12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  tital:{
    fontSize: 20, 
    alignItems:'center',
    justifyContent:'flex-start',
    fontWeight:'bold',
  },
  button: {
    flex:1,
    alignItems: 'center',
    borderRadius : 10*rem,
    margin: 9,
    padding: 4,
    backgroundColor: '#ccc'
  },
  buttonText: {
    textAlign:'center',
    fontSize: 16,
    color: '#000',
  },
  picture:{
    marginTop:'5%',
    marginLeft: '15%',
    alignItems:'center',
    justifyContent:'center',
    width: '70%',
    borderWidth:1, 
    borderColor: '#ccc'
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  //style for submit button
  submit : {
    backgroundColor :"#484848",
    marginTop : "1%",
    marginLeft : "31%",
    width : "38%",
    height : "32%",
    borderRadius: 10 * rem,
    justifyContent: "center",
    alignItems: "center",  
 },
  submittext : {
    color : "white",
    fontSize : 16*rem, 
  },
});
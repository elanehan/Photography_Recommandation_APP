import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

//add

class thirdpage extends React.Component {

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
      citystreet: 0,
      building: 0,
      forest: 0,
      park: 0,
      garden: 0,
      beach: 0,
      station: 0,
      bridge: 0,
      flower: 0,
    };
  }

  //add

  render() {
   
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
            <View style={{alignItems:'flex-start', justifyContent:'center'}}>
              <Text style={{fontSize:17, color:'#ccc'}}>    Choose the tags you want !</Text>
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

            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => this.setState({citystreet: this.state.citystreet==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.citystreet==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.citystreet==0?'#000':'white'}]}>
                  City street
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({building: this.state.building==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.building==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.building==0?'#000':'white'}]}>
                  In a building
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({forest: this.state.forest==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.forest==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.forest==0?'#000':'white'}]}>
                  Forest trail
              </Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => this.setState({park: this.state.park==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.park==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.park==0?'#000':'white'}]}>
                  Amusement park  
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({garden: this.state.garden==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.garden==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.garden==0?'#000':'white'}]}>
                  Garden
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({beach: this.state.beach==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.beach==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.beach==0?'#000':'white'}]}>
                  Beach
              </Text>
              </TouchableOpacity>
              </View>

              
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => this.setState({station: this.state.station==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.station==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.station==0?'#000':'white'}]}>
                  Station
              </Text>
              </TouchableOpacity>
 
              <TouchableOpacity onPress={() => this.setState({bridge: this.state.bridge==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.bridge==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.bridge==0?'#000':'white'}]}>
                  Bridge
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({flower: this.state.flower==0 ? 1:0})} style={[styles.button,{backgroundColor: this.state.flower==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.flower==0?'#000':'white'}]}>
                  Flower field
              </Text>
              </TouchableOpacity>
            </View>

        

            {/********************/}

            {/*submit button */}
            <View>
              <TouchableOpacity 
                onPress={() => {
                  this.props.navigation.navigate("sixthpage");
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
  


export default thirdpage;

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
    backgroundColor: '#ccc',
    borderRadius : 10*rem,
    margin: 9,
    padding: 4,    
  },
  buttonText: {
    textAlign:'center',
    fontSize: 12,
    color: '#000',
  },
  picture:{
    marginTop:'5%',
    alignItems:'center',
    justifyContent:'center',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  //style for submit button
  submit : {
    backgroundColor :"#484848",
    marginTop : "10%",
    marginLeft : "31%",
    width : "38%",
    height : "32%",
    borderRadius: 10 * rem,
    justifyContent: "center",
    alignItems: "center",  
 },
  submittext : {
    color : "white",
    fontSize : 14*rem, 
  },
});

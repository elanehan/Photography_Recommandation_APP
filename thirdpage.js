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
  ScrollView, 
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
      road: 0,
      building: 0,
      sky: 0,
      outdoor: 0,
      car: 0,
      tree: 0,
      mountain: 0,
      store: 0,
      seaside: 0,
      wall: 0,
      sign: 0,
      stairs: 0,
      sofa: 0,
      windows: 0,
      table: 0,
      bed:0,
      decoration:0,
      door:0,
      television:0,
      computer:0,
      ceiling:0,
      floor:0,
      river:0,
      select_G:0,
      select_N:0,
      select_S:0
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
            source={require("./assets/background.jpg")}
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
              <Text style={{fontSize:17, color:'#ccc'}}>    Choose the tags you want !</Text>
            </View>
 
            <View style={{marginLeft:'7%'}}>
              <Text style={styles.tital}>Gender</Text>
            </View>
          
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_G==0)
                this.setState({Male: 1,select_G: 1})
                else if(this.state.select_G==1 && this.state.Male==1)
                this.setState({Male: 0,select_G: 0}) }}
                style={[styles.button,{backgroundColor: this.state.Male==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.Male==0?'#000':'white'}]}>
                  Male
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_G==0)
                this.setState({Female: 1,select_G: 1})
                else if(this.state.select_G==1 && this.state.Female==1)
                this.setState({Female: 0,select_G: 0}) }}
                style={[styles.button,{backgroundColor: this.state.Female==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.Female==0?'#000':'white'}]}>
                  Female
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft:'7%'}}>
              <Text style={styles.tital}>Number of people</Text>
            </View>

            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_N==0)
                this.setState({one: 1,select_N: 1})
                else if(this.state.select_N==1 && this.state.one==1)
                this.setState({one: 0,select_N: 0}) }}
                style={[styles.button,{backgroundColor: this.state.one==0 ? '#ccc':'#ABDB8A'}]}>
              <Text style={[styles.buttonText,{color:this.state.one==0?'#000':'white'}]}>
                  1
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_N==0)
                this.setState({two: 1,select_N: 1})
                else if(this.state.select_N==1 && this.state.two==1)
                this.setState({two: 0,select_N: 0}) }}
                style={[styles.button,{backgroundColor: this.state.two==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.two==0?'#000':'white'}]}>
                    2
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_N==0)
                this.setState({three: 1,select_N: 1})
                else if(this.state.select_N==1 && this.state.three==1)
                this.setState({three: 0,select_N: 0}) }}
                style={[styles.button,{backgroundColor: this.state.three==0 ? '#ccc':'#ABDB8A'}]}>
              <Text style={[styles.buttonText,{color:this.state.three==0?'#000':'white'}]}>
                  3
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_N==0)
                this.setState({more: 1,select_N: 1})
                else if(this.state.select_N==1 && this.state.more==1)
                this.setState({more: 0,select_N: 0}) }}
                style={[styles.button,{backgroundColor: this.state.more==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.more==0?'#000':'white'}]}>
                    more
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={{marginLeft:'7%'}}>
              <Text style={styles.tital}>Scene</Text>
            </View>

            
            <ScrollView style={{height:600/16*9}}>
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({road: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.road==1)
                this.setState({road: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.road==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.road==0?'#000':'white'}]}>
                  sss
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({building: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.building==1)
                this.setState({building: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.building==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.building==0?'#000':'white'}]}>
                  building
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({sky: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.sky==1)
                this.setState({sky: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.sky==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.sky==0?'#000':'white'}]}>
                  sky
              </Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({outdoor: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.outdoor==1)
                this.setState({outdoor: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.outdoor==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.outdoor==0?'#000':'white'}]}>
                  outdoor 
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({car: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.car==1)
                this.setState({car: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.car==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.car==0?'#000':'white'}]}>
                  car
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({tree: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.tree==1)
                this.setState({tree: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.tree==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.tree==0?'#000':'white'}]}>
                  tree
              </Text>
              </TouchableOpacity>
              </View>

              
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({mountain: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.mountain==1)
                this.setState({mountain: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.mountain==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.mountain==0?'#000':'white'}]}>
                  mountain
              </Text>
              </TouchableOpacity>
 
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({store: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.store==1)
                this.setState({store: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.store==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.store==0?'#000':'white'}]}>
                  store
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({seaside: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.seaside==1)
                this.setState({seaside: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.seaside==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.seaside==0?'#000':'white'}]}>
                  seaside
              </Text>
              </TouchableOpacity>
            </View>


            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({wall: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.wall==1)
                this.setState({wall: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.wall==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.wall==0?'#000':'white'}]}>
                  wall
              </Text>
              </TouchableOpacity>
 
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({sign: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.sign==1)
                this.setState({sign: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.sign==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.sign==0?'#000':'white'}]}>
                  sign
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({stairs: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.stairs==1)
                this.setState({stairs: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.stairs==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.stairs==0?'#000':'white'}]}>
                  stairs
              </Text>
              </TouchableOpacity>
            </View>


            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({sofa: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.sofa==1)
                this.setState({sofa: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.sofa==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.sofa==0?'#000':'white'}]}>
                  sofa
              </Text>
              </TouchableOpacity>
 
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({windows: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.windows==1)
                this.setState({windows: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.windows==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.windows==0?'#000':'white'}]}>
                  windows
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({table: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.table==1)
                this.setState({table: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.table==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.table==0?'#000':'white'}]}>
                  table
              </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({bed: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.bed==1)
                this.setState({bed: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.bed==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.bed==0?'#000':'white'}]}>
                  bed
              </Text>
              </TouchableOpacity>
 
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({decoration: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.decoration==1)
                this.setState({decoration: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.decoration==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.decoration==0?'#000':'white'}]}>
                  decoration
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({door: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.door==1)
                this.setState({door: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.door==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.door==0?'#000':'white'}]}>
                  door
              </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({television: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.television==1)
                this.setState({television: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.television==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.television==0?'#000':'white'}]}>
                  television
              </Text>
              </TouchableOpacity>
 
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({computer: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.computer==1)
                this.setState({computer: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.computer==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.computer==0?'#000':'white'}]}>
                  computer
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({ceiling: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.ceiling==1)
                this.setState({ceiling: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.ceiling==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.ceiling==0?'#000':'white'}]}>
                  ceiling
              </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({floor: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.floor==1)
                this.setState({floor: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.floor==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.floor==0?'#000':'white'}]}>
                  floor
              </Text>
              </TouchableOpacity>
 
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0)
                this.setState({river: 1,select_S: 1})
                else if(this.state.select_S==1 && this.state.river==1)
                this.setState({river: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.river==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.river==0?'#000':'white'}]}>
                  river
              </Text>
              </TouchableOpacity>

            </View>

            </ScrollView>
        

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
/*
  scrollView: {
    backgroundColor: 'pink',
    height: 100,
  },
  */

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

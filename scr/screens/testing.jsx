import { Text,TextInput, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Button } from "./scr/components/button";
import { Register } from "./scr/screens/register/register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function app({navigation}) {
  
  const onSubmitPress = () => {
    alert("hie this an alert from a valid form");
  };
  return (

<View style={{flex:1,}}>

  <View style={{backgroundColor:'#F16B00',
        borderBottomLeftRadius:100,
        height:260 ,
        width:360,
        }}>
          <View style={{
          height:100, 
          width:100, 
          marginTop:50,
          marginLeft:100,
          }}>
          <Image source={require("./assets/logoid.png")}></Image>

  </View>
   <View style={{alignSelf:'center'}}>
         <Text style={{
          color:'white',
          fontWeight:'bold', 
          fontSize: 30,
          marginTop:50,
          textAlign:'center',
          }}> Login
          </Text> 
    </View>
</View>

<View >
          <TextInput style={{borderRadius:20,
            padding:8, 
            borderWidth:1, 
            margin:10}} 
            placeholder={"email"} />
          <TextInput style={{borderRadius:20, 
            padding:8, 
            borderWidth:1, 
            margin:10,
          }} 
            placeholder={"password"} />
         
          <Button primary title={"Signin"}  />
          <TouchableOpacity>
          <Button title="Go to Register Page" onPress={() => navigation.push('Register')} />

          </TouchableOpacity>
        </View>  
</View>

  );
}

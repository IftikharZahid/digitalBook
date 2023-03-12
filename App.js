import React from 'react';
import { TextInput, StyleSheet, Text,  View , Image, Button,TouchableOpacity } from 'react-native';
import{styles} from './scr/components/theme'

export default function App ()
  {
    return (

<View style={styles.container}>
<View>
  <Image source={require('./assets/seeks.png')} 
  style={{height:200, width:200, alignSelf:'center'}} />
</View>
      <Text style={styles.text}>Welcome To Seeks Academy</Text>
      <Text style={{marginLeft: 25}}> Enter Email or Phone number:</Text>
      
      <TextInput placeholder='Email/Phone Number'
        style={styles.textInput}    />
      <Text style={{marginLeft: 25}}> Enter Password:</Text>

      <TextInput placeholder='Password'
      style={styles.textInput} />

      <View style={{flexDirection:'row', alignSelf:'center'}}>
        <TouchableOpacity style={styles.buttons}>
        <Text style={{color:'white', fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}>
        <Text style={{color:'white', fontWeight:'bold'}}>Register</Text>
        </TouchableOpacity>
      </View>
</View>
);
  }
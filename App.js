import React from 'react';
import { TextInput, StyleSheet, Text,  View , Image, Button, } from 'react-native';
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
      
      <TextInput placeholder='Email/Phone Number'
        style={styles.textInput} />
        <TextInput placeholder='Password'
        style={styles.textInput} />
<View style={{flexDirection:'row',}}>
<Text style={styles.buttons}>Login</Text>
        <Text style={styles.buttons}> Sign up</Text>
</View>
  </View>
);
  }
import { useState } from "react";
import { Image,View, TextInput, StyleSheet, Button, Text , ActivityIndicator } from 'react-native';
import { Main } from '../main/main';
import Spinner from "react-native-loading-spinner-overlay";
import { auth } from "../../services/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

function Register({navigation}){

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState (true);



const onEyePressed=()=>{

  if(showPassword=== true)
  {
    setShowPassword(false)
  }
  else {
    setShowPassword(true)
  }
}


  const onSubmitPress=()=>{

    if (firstName === "") {
      alert("please enter first name");
      return;
    }

    if (lastName === "") {
      alert("please enter last name");

      return;
    }

    if (email === "") {
      alert("please enter email");
      return;
    }

    if (password === "") {
      alert("please enter password");
      return;
    }
    if (confirmPassword === "") {
      alert("please enter confirm password");
      return;
    }
    if (confirmPassword !== password) {
      alert("passwords dont match");
      return;
    }
    createUserWithEmailAndPassword (auth, email, password).then(response=>{
      alert("User registered successfully")
    })
    .catch((error) =>{
      alert(error.message);
    });
    setLoading(true);
    navigation.navigate(Main)
    setLoading(false);

  }

  return (
    
    <View style={styles.container}>
    
      <Text style={styles.title}>Registration Page</Text>
      
      <View>
       <Image source={require('../../.././assets/icon.png')} 
       style={{width:100, height:100, borderRadius:20, borderWidth:1, borderColor:'black'}}>
       </Image>
      </View>

      <TextInput
        onChangeText={setFirstName}
        style={styles.input}
        placeholder="firstName"
      />
      <TextInput
      onChangeText={setLastName}
        style={styles.input}
        placeholder="lastName"
      />
      <TextInput
      onChangeText={setEmail}
        style={styles.input}
        placeholder="email"
      />
      <View style={styles.passwordCon}> 
      <TextInput
      style={styles.passwordInput}
      onChangeText={(text)=> setPassword(text)}
        placeholder="password"
        secureTextEntry={showPassword}  
      />

      <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color={showPassword ? "orange" : 'black'} onPress={onEyePressed} />
      </View>

      <View style={styles.passwordCon}> 
      <TextInput
      style={styles.passwordInput}
       onChangeText={(text)=> setConfirmPassword(text)}
       placeholder="confirmPassword"
       secureTextEntry={showPassword}
      />

      <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color={showPassword ? "orange" :'black'} onPress={onEyePressed} />
      </View>
      
      <Button title="Signup " onPress={onSubmitPress} />
<Spinner visible={loading} textContent={"Loading..."} />

</View>

    
    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
    width: '85%',
  },
  passwordCon:{
    alignItems:'center',
    flexDirection:'row',
    borderRadius: 4,
    borderWidth:1,    
    borderColor: '#ccc',    
    padding: 9,
    marginVertical: 10,

  },
  passwordInput:{
    width: '80%',

  }

});

export {Register};
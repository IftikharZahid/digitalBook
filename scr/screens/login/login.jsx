import { useState } from "react";
import { View, TextInput, Button, Text , TouchableOpacity} from 'react-native';
import { Register } from '../register/register';
import{styles} from './login_styles'
import { Ionicons } from '@expo/vector-icons';
import { Main } from "../main/main";

function Login({navigation}){

const [showPassword, setShowPassword] = useState();
const [password, setPassword] = useState ();
const [email, setEmail] = useState ();


const userSigned =()=>{

  if (email === "") {
    alert("please enter Email/User Name");
    return;
  }

  if (password === "") {
    alert("please enter password");

    return;
  }
  if( email !== password )
  {
      navigation.navigate(Main)
  }
  else{
      alert ('email and password should not be same')

  }
};

const onEyePressed=()=>{

  if(showPassword=== true)
  {
    setShowPassword(false)
  }
  else {
    setShowPassword(true)
  }
}

const goToRegister=()=>{   
navigation.navigate(Register)

  }

  return (
  
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Email/User_Name"
        onChangeText={(text)=> setEmail(text)}
      />
      
      <View style={styles.passwordCon}> 
      <TextInput
      style={styles.passwordInput}
      onChangeText={(text)=> setPassword(text)}
        placeholder="Password"
        secureTextEntry={showPassword}  
      />

      <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color={showPassword ? "orange" : 'black'} onPress={onEyePressed} />
      </View>
      
      <Button title="Signin " onPress={userSigned}/>
      <TouchableOpacity>
      <Text style={{ marginTop:10}} onPress={goToRegister} > Don't have an aacount?</Text>
      </TouchableOpacity>
    

</View>

  );
};

export{Login};
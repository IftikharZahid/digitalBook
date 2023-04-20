import {
  TouchableOpacity,
  Image,
  View,ImageBackground,
  TextInput,
  Button,
  Text,
} from "react-native";
import { Main } from "../main/main";
import Spinner from "react-native-loading-spinner-overlay";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { styles } from "./register_style";
import { Ionicons } from "@expo/vector-icons";
import { CustomCamera } from "../../components/customCamera";
import { useState } from "react";
import { auth } from "../../services/firebaseConfig";

function Register({ navigation }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
 
  const onEyePressed = () => {
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const onSubmitPress = () => {
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
  
setLoading(true);
  
    createUserWithEmailAndPassword (auth, email, password).then(response=>{
      alert("User registered successfully")
      setLoading(false);

    })
    .catch((error) =>{
      alert(error.message);
      setLoading(false);

    });
    
    navigation.navigate(Main)
    setLoading(false);

};
    const onPickImagePress = () => {
      // invert the state of camera opernet
      setIsCameraOpen(true)
    }
  
  return (

    <ImageBackground
      source={require("../../../assets/01.jpg")}
      style={styles.background} 
      imageStyle={{ opacity: 0.5 }}
      > 

    <View style={styles.container}>
      <Text style={styles.title}>Registration Page</Text>

      <View><TouchableOpacity style={styles.pickImageCon}
          onPress={onPickImagePress}
        >
        <Image
          source={require("../../.././assets/icon.png")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: "orange",
            alignSelf:'center'
          }}
        ></Image>
        </TouchableOpacity>
      </View>

      <TextInput
        onChangeText={setFirstName}
        style={styles.input}
        placeholder="FirstName"
      />
      <TextInput
        onChangeText={setLastName}
        style={styles.input}
        placeholder="LastName"
      />
      <TextInput
        onChangeText={setEmail}
        style={styles.input}
        placeholder="Email"
      />
      <View style={styles.passwordCon}>
        <TextInput
          style={styles.passwordInput}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={showPassword}
        />

        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color={showPassword ? "orange" : "black"}
          onPress={onEyePressed}
        />
      </View>

      <View style={styles.passwordCon}>
        <TextInput
          style={styles.passwordInput}
          onChangeText={(text) => setConfirmPassword(text)}
          placeholder="ConfirmPassword"
          secureTextEntry={showPassword}
        />

        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color={showPassword ? "orange" : "black"}
          onPress={onEyePressed}
        />
      </View>

      <Button title="Signup now " onPress={onSubmitPress} />

      <Spinner visible={loading} textContent={"Loading..."} />

      {isCameraOpen === true && <CustomCamera />}

    </View>
    </ImageBackground>

  );
}
export { Register };

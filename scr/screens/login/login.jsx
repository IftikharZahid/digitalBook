import { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { Register } from "../register/register";
import { styles } from "./login_styles";
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import Spinner from "react-native-loading-spinner-overlay";
import { useEffect } from "react";

import {
  getIsUserLoggedIn,
  getUserUid,
  saveIsUserLoggedIn,
  saveUserUid,
} from "../../utils/help";


function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getIsUserLoggedIn().then((response) => {
      if (response === "true") {
        navigation.replace("Main");
      }
    });
  }, []);

  const onEyePressed = () => {
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }

  };
  
  const userSigned = () => {

    if (email === "") {
      alert("Enter Email/User Name.");
      return;
    }
    if (password === "") {
      alert("Enter Password");
      return;
    }
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        const uid = user.uid;
        // save user session and user uid in local storage and move ahead
        saveIsUserLoggedIn();
        saveUserUid(uid);
        setLoading(false);
        navigation.replace("Main");
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });  };

  const goToRegister = () => {
    navigation.navigate(Register);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
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

      <Text
        style={{
          alignSelf: "flex-start",
          marginLeft: 30,
          marginBottom: 10,
          color: "red",
        }}
     
      >
        {"⚠ Password is shown ⚠"}
      </Text>

      <Button title="Signin " onPress={userSigned} />
      <TouchableOpacity>
        <Text style={{ marginTop: 10 }} onPress={goToRegister}>
          {"Don't have an aacount?"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export { Login };
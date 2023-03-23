import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { colors } from "../components/theme/designSystem";

/***
 *
 * primary : ( full bg  , with primary color, no border)
 * outline : ( no bg, border with primary, border 1 )
 */
function Button({ primary, outline, title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        primary === true
          ? styles.primaryButton
          : outline === true
          ? styles.outlineButton
          : styles.primaryButton
      }
    >
      <Text
        style={
          primary
            ? styles.btnText
            : outline
            ? styles.outlineText
            : styles.btnText
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const base = {
  backgroundColor: colors.topban,
  borderRadius: 50,
  borderWidth: 1,
  padding: 10,
  marginVertical: 10,
  
  

  
  

};

const styles = StyleSheet.create({
  primaryButton: {
    ...base,
    margin:10,
    height:45,
    width:120,
    justifyContent:'center'

  },
  btnText: {
    color: colors.white,
    fontWeight:'bold',
    fontSize:15
  },
  outlineButton: {
    ...base,
    backgroundColor: colors.white,
    margin:20
  },
  outlineText: {
    color: colors.primary,
  },
  
 
});

export { Button };
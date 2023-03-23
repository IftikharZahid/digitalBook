
import { View, Text, StyleSheet } from "react-native";
import React from "react";

function Main() {
  return (
<View style={styles.container}>      
    <Text style={styles.title}>Welcome to the DigitalBook</Text>
</View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: '80%',
  },
});

export { Main };
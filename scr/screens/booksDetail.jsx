import React from "react";
import { View, Text } from "react-native";

function BookDetails({ navigation, route }) {

  //this is business area to execute any command in app.
  const incomingData = route.params;
// consol .log is to show output
  console.log("hie");

  return (
    <View>
      <Text>{incomingData.data.title}</Text>
      <Text>{incomingData.data.subtitle}</Text>
    </View>
  );
}

export { BookDetails };
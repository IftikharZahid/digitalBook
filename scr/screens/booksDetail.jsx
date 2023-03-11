import React from "react";
import { View, Text } from "react-native";

function BookDetails({ navigation, route }) {
  const incomingData = route.params;

  console.log("hie");

  return (
    <View>
      <Text>{incomingData.data.title}</Text>
      <Text>{incomingData.data.subtitle}</Text>
    </View>
  );
}

export { BookDetails };
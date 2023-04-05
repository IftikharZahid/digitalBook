import { StyleSheet, View } from "react-native";

import MapView from "react-native-maps";

import React from "react";

function Map({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        zoomEnabled
        zoomControlEnabled
        mapType="standard"
        showsUserLocation
        showsMyLocationButton
      />
    </View>
  );
}

export { Map };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
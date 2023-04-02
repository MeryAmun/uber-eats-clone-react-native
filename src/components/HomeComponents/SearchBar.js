import { View, Text,StyleSheet } from "react-native";
import React, {useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { googlePlacesApiKey } from "../../dummyData/data";

navigator.geolocation = require('react-native-geolocation-service');




const SearchBar = ({ setCity }) => {


  return (
    <View style={styles.root}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
        console.log(data, details);
          const city = data.description.split(',')[0];
          setCity(city)
          console.log(city);
        }}
        query={{
          key: googlePlacesApiKey,
          language: 'en',
        }}
        currentLocation={true}
         currentLocationLabel='Current location'
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rightButton}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
    flexDirection: "row",
  },
  rightButton: {
    flexDirection: "row",
    marginRight: 8,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 30,
    padding: 9,
  },
});

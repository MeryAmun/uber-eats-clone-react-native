import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const RestaurantImage = ({image,name}) =>
 (
    <View>
   {
    !!name ? (
      <Image
        source={{uri:image}}
        style={styles.image}
      />
    ) :(
      <Image
        source={image}
        style={styles.image}
      />
    )
   }
      <TouchableOpacity style={styles.touch}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#ffff'/>
      </TouchableOpacity>
    </View>
  )

export default RestaurantImage;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 180,
  },
  touch:{
    position:'absolute',
    right:20,
    top:20
  }
});

import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const RestaurantInfo = ({name,rating}) => {
  return (
    <View style={styles.infoRoot}>
    <View style={styles.midView}>
    <Text style={styles.bigText}>{name}</Text>
    <Text>30-45 . min</Text>
    </View>
    <View style={styles.smallestView}><Text style={styles.smallText}>{rating}</Text></View>
</View>
  )
}

export default RestaurantInfo
const styles = StyleSheet.create({
    infoRoot:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
marginTop:10,
    },

bigText:{
    fontSize:15,
    fontWeight:'bold'
},
smallText:{
    fontSize:13,
    color:'gray'
},
smallestView:{
   backgroundColor:'#eee',
    color:'gray',
    height:30,
    width:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15
}
});
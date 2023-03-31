import { View ,StyleSheet} from "react-native";
import RestaurantImage from "./RestaurantImage";
import RestaurantInfo from "./RestaurantInfo";
import { TouchableOpacity } from "react-native";

const RestaurantItem = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.touchable}>
      <View style={styles.root}>
      <RestaurantImage/>
      <RestaurantInfo/>
    </View>
    </TouchableOpacity>
  );
};


export default RestaurantItem;
const styles = StyleSheet.create({
  touchable:{
marginBottom:30
  },
  root:{
    backgroundColor:'#fff',
    marginTop:10,
    padding:15

  }
})


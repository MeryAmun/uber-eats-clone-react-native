import { View ,StyleSheet} from "react-native";
import RestaurantImage from "./RestaurantImage";
import RestaurantInfo from "./RestaurantInfo";
import { TouchableOpacity } from "react-native";


const RestaurantItems = ({restaurants}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.touchable}>
      {
        restaurants?.map(({image_url,name,categories,price,reviews,rating},index) => (
          <View style={styles.root} key={index}>
      <RestaurantImage image={image_url} name={name}/>
      <RestaurantInfo 
      name={name} 
      categories={categories} 
      reviews={reviews}
      price={price}
      rating={rating}/>
    </View>
        ))
      }
    </TouchableOpacity>
  );
};


export default RestaurantItems;
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


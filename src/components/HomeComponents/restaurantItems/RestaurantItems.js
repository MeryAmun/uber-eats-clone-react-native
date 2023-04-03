import { View, StyleSheet } from "react-native";
import RestaurantImage from "./RestaurantImage";
import RestaurantInfo from "./RestaurantInfo";
import { TouchableOpacity } from "react-native";

const RestaurantItems = ({ restaurants, navigation }) => {
 // console.log(restaurants[0])
  return (
    <>
      {restaurants?.map(
        (
          {
            image_url,
            name,
            categories,
            price,
            rating,
            review_count,
          },
          index
        ) => (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.touchable}
            key={index}
            onPress={() =>
              navigation.navigate("RestaurantDetails", {
                name,
                image_url,
                price,
                rating,
                review_count,
                categories,
              })
            }
          >
            <View style={styles.root}>
              <RestaurantImage image={image_url} name={name} />
              <RestaurantInfo
                name={name}
                categories={categories}
                reviews_count={review_count}
                price={price}
                rating={rating}
              />
            </View>
          </TouchableOpacity>
        )
      )}
    </>
  );
};

export default RestaurantItems;
const styles = StyleSheet.create({
  touchable: {
    marginBottom: 30,
  },
  root: {
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 15,
  },
});

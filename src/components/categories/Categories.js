import { Text, StyleSheet, Image, ScrollView, View } from "react-native";
import React from "react";

const items = [
  {
    image: require("../.././assets/images/shopping-bag.png"),
    title: "Pick-up",
  },
  {
    image: require("../.././assets/images/soft-drink.png"),
    title: "Soft Drinks",
  },
  {
    image: require("../.././assets/images/bread.png"),
    title: "Bakery Items",
  },
  {
    image: require("../.././assets/images/fast-food.png"),
    title: "Fast Foods",
  },
  {
    image: require("../.././assets/images/deals.png"),
    title: "Deals",
  },
  {
    image: require("../.././assets/images/coffee.png"),
    title: "Coffee & Tea",
  },

  {
    image: require("../.././assets/images/desserts.png"),
    title: "Desserts",
  },
];
const Categories = () => {
  return (
    <View style={styles.root}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map(({ image, title }, index) => (
          <View style={styles.view} key={index}>
            <Image source={image} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
const styles = StyleSheet.create({
  root: {
    marginTop: 5,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 20,
  },
  view: {
    alignItems: "center",
    marginRight: 30,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  text: {
    fontSize: 13,
    fontWeight: 900,
  },
});

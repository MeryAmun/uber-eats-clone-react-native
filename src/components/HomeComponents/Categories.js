import { Text, StyleSheet, Image, ScrollView, View } from "react-native";
import { categoryItems } from "../../dummyData/data";


const Categories = () => {
  return (
    <View style={styles.root}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoryItems.map(({ image, title }, index) => (
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

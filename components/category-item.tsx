import { StyleSheet, Text, View } from "react-native";
import { categoriesType } from "../data/categories";

export default function CategoryItem(item: categoriesType) {
  return (
    <View style={styles.container}>
      {item.icon}
      <Text style={styles.categoryTitle}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
    paddingLeft: 8,
    paddingRight: 16,
    paddingVertical: 8,
    backgroundColor: "#F8F8F8",
    borderRadius: 16,
  },
  categoryTitle: {
    fontFamily: "Rubik_400Regular",
    fontWeight: "400",
    fontSize: 15,
    paddingLeft: 8,
  },
});

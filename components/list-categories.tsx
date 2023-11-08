import { StyleSheet, Text, View, FlatList } from "react-native";
import { categories, categoriesType } from "../data/categories";
import CategoryItem from "./category-item";

export default function ListCategories() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headingText}>Category</Text>
      </View>
      <View style={{ flex: 0 }}>
        <FlatList
          style={styles.listContainer}
          horizontal
          data={categories}
          renderItem={({ item }: { item: categoriesType }) => (
            <CategoryItem {...item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 24,
    flex: 1,
  },
  headingText: {
    fontFamily: "Rubik_500Medium",
    fontSize: 18,
    color: "#242424",
  },
  listContainer: {
    paddingHorizontal: 24, // Compensar el padding izquierdo del contenedor
    // marginRight: -24,
    // paddingLeft: 24,
  },
});

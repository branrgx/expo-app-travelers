import { View, Text, StyleSheet, FlatList } from "react-native";
import { sites, sitesType } from "../data/sites";
import SiteItem from "./site-item";

export default function PopularSiteList() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headingText}>Popular</Text>
      </View>
      <FlatList
        style={styles.list}
        data={sites}
        horizontal
        renderItem={({ item }: { item: sitesType }) => <SiteItem {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 24,
  },
  headingText: {
    fontFamily: "Rubik_500Medium",
    fontSize: 18,
    color: "#242424",
  },
  list: {
    flex: 0,
    paddingHorizontal: 24,
  },
});

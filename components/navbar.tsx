import { StyleSheet, Text, View } from "react-native";
import { IconMap } from "./icons";

export default function NavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Bashkortostan</Text>
        <IconMap />
      </View>
      <Text style={styles.subTitle}>Choose another</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  subContainer: {
    paddingTop: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Rubik_500Medium",
    fontSize: 34,
  },
  subTitle: {
    paddingTop: 8,
    fontFamily: "Rubik_400Regular",
    fontSize: 12,
    color: "#242424",
  },
});

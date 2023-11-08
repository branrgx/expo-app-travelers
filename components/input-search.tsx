import { StyleSheet, TextInput, View } from "react-native";
import { IconSeach } from "./icons";

export default function InputSearch() {
  return (
    <View style={{ paddingHorizontal: 24 }}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Enter name or category"
        />
        <IconSeach style={styles.iconSeach} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 16,
    padding: 16,
    width: "auto",
    position: "relative",
  },
  inputSearch: {
    color: "#242424",
    marginRight: 26,
    flex: 1,
  },
  iconSeach: {
    position: "absolute",
    right: 16,
  },
});

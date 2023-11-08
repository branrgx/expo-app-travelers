import { StyleSheet, Text, View, Dimensions } from "react-native";
import { IconChat, IconLiked, IconMain, IconSettings } from "./icons";

const screeSize = Dimensions.get("screen");

function ItemNavLink({
  icon,
  current = false,
}: {
  icon: JSX.Element;
  current?: boolean;
}) {
  const styleIcon = [styles.itemNav, current && styles.itemNavActive];

  return <View style={styleIcon}>{icon}</View>;
}

export default function BottomNavBar() {
  return (
    <View style={styles.container}>
      <ItemNavLink icon={<IconMain />} current />
      <ItemNavLink icon={<IconLiked />} />
      <ItemNavLink icon={<IconChat />} />
      <ItemNavLink icon={<IconSettings />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 30,
    position: "absolute",
    bottom: 0,
    width: screeSize.width,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
    backgroundColor: "#F8F8F8",
  },
  itemNav: {
    padding: 8,
    borderRadius: 50,
  },
  itemNavActive: {
    backgroundColor: "#EB5757",
  },
});

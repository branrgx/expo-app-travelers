import { Image, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import { sitesType } from "../data/sites";
import { IconHeartRadious, IconStar } from "./icons";

export default function SiteItem(item: sitesType) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.imageBackground} />
      <IconHeartRadious style={styles.iconHeart} />
      <View style={styles.siteMeta}>
        <Text style={styles.metaTitle}>{item.name}</Text>
        <BlurView intensity={60} tint="dark" style={styles.containerRate}>
          <IconStar />
          <Text style={styles.rateNum}>{item.rate}</Text>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
    overflow: "hidden",
  },
  imageBackground: {
    width: 212,
    height: 280,
  },
  siteMeta: {
    left: 24,
    bottom: 28,
    position: "absolute",
    maxWidth: 244,
  },
  metaTitle: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    fontWeight: "normal",
  },
  containerRate: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    width: 54,
    height: 24,
    backgroundColor: "rgba(255, 255, 255, 0.10)",
  },
  rateNum: {
    color: "#FFF",
    fontFamily: "Rubik_400Regular",
    fontSize: 13,
    paddingLeft: 4,
  },
  iconHeart: {
    position: "absolute",
    top: 16,
    right: 16,
  },
});

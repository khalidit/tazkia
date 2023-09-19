import { useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { DetailScreenRouteProp } from "../navigation/types";

export default function DetailScreen() {
  const route = useRoute<DetailScreenRouteProp>();
  const { name, birthYear } = route.params;
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={[styles.prezFont, { marginBottom: 10 }]}>
          Vous avez choisi {name} née le {birthYear}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "darkseagreen",
  },
  prezFont: {
    fontSize: 17,
    textAlign: "justify",
  },
});

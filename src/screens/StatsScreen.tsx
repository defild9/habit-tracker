import { View, Text, StyleSheet } from "react-native";

const StatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stats Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
});

export default StatsScreen;

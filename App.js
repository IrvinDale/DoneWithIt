import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";

export default function App() {
  let x = 1;
  console.log("App executed");
  console.log(require("./assets/icon.png"));
  console.log(Dimensions.get("screen"));
  console.log(useDimensions);
  const handlePress = () => console.log("Text pressed");
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text numberOfLines={1} onPress={handlePress}>
        Hello! This is my first react native app!
      </Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <TouchableOpacity onPress={() => console.log("Image Tapped")}>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          height: landscape ? "100%" : "30%",
          backgroundColor: "dodgerblue",
        }}
      ></View>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "anroid" ? StatusBar.currentHeight : 0,
    // backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

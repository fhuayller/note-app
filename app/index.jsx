import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Redirect href={'/(tabs)/CreateNotes'}/>
    </View>
  );
}

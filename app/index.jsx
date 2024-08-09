import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-Bgprincipal h-full">
      <Link href={'/(tabs)/HomeNote'}>
        <Text className="text-yellow-500">
          Entra
        </Text>
      </Link>
    </SafeAreaView>
  );
}

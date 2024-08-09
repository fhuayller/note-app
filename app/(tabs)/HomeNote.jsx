import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import icons from '../../constants/icons'

const { bgPencil } = icons


const HomeNote = () => {
  const router = useRouter();

  const handleCreateNote = () => {
    router.push('/CreateNote'); // Navegar a la pantalla de creación de notas
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="bg-Bgprincipal h-full flex-1 justify-center items-center">
        <Image source={bgPencil} />
        <Text className="text-gray-300 text-2xl mt-4">¿Ya es hora de escribir?</Text>
        <TouchableOpacity
          onPress={handleCreateNote}
          className="bg-blue-500 p-4 rounded-full mt-8"
        >
          <Text className="text-white text-center text-sm">Nueva nota</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeNote;
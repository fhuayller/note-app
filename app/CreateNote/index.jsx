import React, { useState } from 'react';
import { TextInput, Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import TextOptionsBar from '../../components/TextOptionsBar/TextOptionsBar';
import icons from '../../constants/icons';

const { dots, back, check } = icons


const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const handleBack = () => {
    router.push('/(tabs)/HomeNote');
  };

  return (
    <SafeAreaView className="bg-Bgprincipal flex-1">
      <View className="p-4">
        <TouchableOpacity onPress={handleBack}>
          <Image source={back} />
        </TouchableOpacity>
      </View>
      <View className="flex-1 p-4">
        <TextInput
          className="bg-transparent text-gray-300 text-xl mb-4"
          placeholder="Título"
          placeholderTextColor="#6b7280"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          className="bg-transparent text-gray-300 text-lg"
          placeholder="Comienza a escribir aquí..."
          placeholderTextColor="#6b7280"
          value={content}
          onChangeText={setContent}
          multiline
        />
      </View>
      <TextOptionsBar />
    </SafeAreaView>
  );
};

export default CreateNote;
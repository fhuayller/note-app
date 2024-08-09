import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import icons from '../../constants/icons';

const TextOptionsBar = () => {
  return (
    <View className="bg-black flex-row justify-around items-center p-4">
      <TouchableOpacity>
        <Image source={icons.dotlist}  />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icons.checklist}  />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icons.imageIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icons.orderedlist}  />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icons.textSize} />
      </TouchableOpacity>
    </View>
  );
};

export default TextOptionsBar;
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

/* const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image source={icon}
      resizeMode="contain"
      tintColor={color}
      className='w-6 h-6'  />
      <Text className={`${focused}` ? 'font-semibold' : 'font-normal'}>{name}</Text>
    </View>
  );
}; */

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black', // Fondo de la navbar negro
          height: 70, // Ajusta la altura de la navbar
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28
        },
        tabBarShowLabel: false, // Opcional: Oculta los títulos de los tabs si solo quiero íconos
      }}
    >
      <Tabs.Screen
        name="TrashScreen"
        options={{
          title: "Deleted Notes",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6 name="trash-can" size={24} color={focused ? 'white' : 'gray'} />
          ),
        }}
      />
      <Tabs.Screen
        name="SearchNotes"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="search1" size={24} color={focused ? 'white' : 'gray'} />
          ),
        }}
      />
      <Tabs.Screen
        name="HomeNote"
        options={{
          title: "New note",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="pencil-square-o" size={24} color={focused ? 'white' : 'gray'} />
          ),
        }}
      />
      <Tabs.Screen
        name="YourNotes"
        options={{
          title: "Your Notes",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="book-open-outline"
              size={24}
              color={focused ? 'white' : 'gray'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="favorite-outline" size={24} color={focused ? 'white' : 'gray'} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

import React from 'react'
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name = 'CreateNotes' options={{title: 'Create your note', headerShown: false, tabBarIcon:({color}) => <FontAwesome name="pencil-square-o" size={24} color="black" /> }}/>
      <Tabs.Screen name = 'YourNotes'options={{title: 'Your Notes', headerShown: false, tabBarIcon:({color}) => <MaterialCommunityIcons name="book-open-outline" size={24} color="black" /> }}/>
      <Tabs.Screen name = 'TrashScreen' options={{title: 'Deleted Notes', headerShown: false, tabBarIcon: ({color}) => <FontAwesome6 name="trash-can" size={24} color="black" />}}/>
      <Tabs.Screen name = 'Favorites' options={{title: 'Favorites', headerShown: false, tabBarIcon: ({color}) => <MaterialIcons name="favorite-outline" size={24} color="black" />}}/>
      <Tabs.Screen name = 'SearchNotes' options={{title: 'Search', headerShown: false, tabBarIcon:({color}) => <AntDesign name="search1" size={24} color="black" /> }}/>
    </Tabs>
  )
}

export default TabLayout
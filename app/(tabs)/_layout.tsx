import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Quiz',
          tabBarIcon: ({ color }) => <Icon size={28} name="paperplane" color={color} />,
        }}
      />
      
      <Tabs.Screen
              name="progress"
              options={{
                title: 'Progress',
                tabBarIcon: ({ color }) => <Icon size={28} name="house" color={color} />,
              }}
            />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color }) => <Icon size={28} name="house" color={color} />,
        }}
      />
    </Tabs>
  );
}

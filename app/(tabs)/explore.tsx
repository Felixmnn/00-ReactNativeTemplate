import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Image, TouchableOpacity, View, Text,ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';

export default function TabTwoScreen() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const getAllEntrys = async () => {
      const keys = await AsyncStorage.getAllKeys(); // Alle Schlüssel abrufen
      const alleItems = await AsyncStorage.multiGet(keys); // Alle Werte abrufen

      // Daten verarbeiten
      const parsedItems = alleItems.map(([key, value]) => {
        // Wert als Array parsen
        const parsedValue = JSON.parse(value);
        return {
          key,
          value: parsedValue,
          isGreen: parsedValue.length >= 9, // Grün, wenn genau 9 Werte
        };
      });

      setItems(parsedItems); // Setze die Items im State
    };

    getAllEntrys();
  }, []);

  return (
    <View className='flex-1 items-center justify-center'>
      {
        items == null ? 
          <ActivityIndicator size="large" color="#1fc274"/>

          :
          <View className="flex-1 justify-center items-center">
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                className={`
                  h-5 w-5 m-2 rounded-[5px] justify-center items-center
                  ${item.isGreen ? 'bg-green-500 border-green-600' : 'bg-red-500 border-red-600'}
                `}
              >
              </TouchableOpacity>
            ))}
          </View>
      }
    </View>
  );
}


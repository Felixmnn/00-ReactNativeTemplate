import { View, Text,FlatList,TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
    const data = ["user-secret", "mobile-screen", "brain","bed", "clapperboard", "users","robot", "eye-slash", 9];
    const [entrysLoaded, setEntrysLoaded] = useState(null)
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    async function getEntry() {
      const entry = await AsyncStorage.getItem(formattedDate)
      if (entry){
        const parsedEntry = JSON.parse(entry)
        setEntrysLoaded(parsedEntry)
      } else {
        setEntrysLoaded([])
      }
    }
    getEntry()

    async function setItem(name) {
      const newArraysLoaded = [...entrysLoaded,name];
      setEntrysLoaded(newArraysLoaded)
      AsyncStorage.setItem(formattedDate,JSON.stringify(newArraysLoaded))
      console.log(newArraysLoaded)
    }
    

return (
    <SafeAreaView className="flex-1">
      <View className='flex-1 items-center justify-center'>
      {
      entrysLoaded == null ? 
        <ActivityIndicator size="large" color="#1fc274"/>
        :
    <FlatList
      data={data}
      numColumns={3}
      contentContainerStyle={{
        flexGrow: 1, // Sorgt dafür, dass die Inhalte den gesamten Platz nutzen
        justifyContent: 'center',
        alignItems: 'center',
      }}
      keyExtractor={(item) => item.toString()} // Der keyExtractor sorgt für eindeutige Schlüssel
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity 
            className={` h-[100px] w-[100px] items-center justify-center m-1 rounded-[5px] border border-[1px] ${ Array.isArray(entrysLoaded) && entrysLoaded.some((obj) => obj === item) ? "bg-green-500 border-green-600" : "bg-red-500 border-red-600"  }`}
            onPress={()=> setItem(item)}
            >
            <Icon name={item} size={30} color={"black"} />
          </TouchableOpacity>
        );
      }}
    />
    } 
    </View>  
  </SafeAreaView>
);
}

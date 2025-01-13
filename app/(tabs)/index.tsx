import { View, Text } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function HomeScreen() {
    const colorScheme = useColorScheme();
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className={`text-3xl font-bold ${colorScheme === 'light' ? "text-black": "text-white"}`}>{"A Empty Working Project! :)"}</Text>
    </View>
  );
}

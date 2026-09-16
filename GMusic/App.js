import { StatusBar } from 'expo-status-bar';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import MusicPlayer from './screens/MusicPlayer';

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar style="light" translucent />
      <MusicPlayer />
    </SafeAreaProvider>
  );
}

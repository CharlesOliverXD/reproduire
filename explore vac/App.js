import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Interview from './ecrans/interviews';
import { Ionicons } from '@expo/vector-icons';
import Profile from './ecrans/Profile';


export default function App() {
  return (
    <View style={styles.container_app}>
      <StatusBar
        hidden={true}
      />

      <Interview />
      {/* <Profile /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container_app: {
    flex: 1,

  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Interview from './ecrans/interveiws';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        hidden= {true}
      />

      <Interview/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal : 16,
    paddingVertical : 16
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

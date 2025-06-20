import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Process from './ecrans/Process';
import Vacancies from './ecrans/Vacancies';
import Job from './ecrans/Job';
import Principal from './ecrans/Principal';
import Curve from './ecrans/Curve';
import Sign from './ecrans/Sign';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar
        hidden={true}
      />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Vacancies" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Sign" component={Sign} />
          <Stack.Screen name="Curve" component={Curve} />
          <Stack.Screen name="Principal" component={Principal} />
          <Stack.Screen name="Vacancies" component={Vacancies} />
          <Stack.Screen name="Process" component={Process} />
          <Stack.Screen name="Job" component={Job} />
        </Stack.Navigator>
      </NavigationContainer>

    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container_app: {
    flex: 1,

  },
});

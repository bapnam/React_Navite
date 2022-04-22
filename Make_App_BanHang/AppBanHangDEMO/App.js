//--
//---Add sys
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//--
//---Add project
import HomeScreen from './nts-screens/Home';
//--
//---Add content

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

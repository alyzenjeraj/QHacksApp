import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

export default function App() {

  let [fontsLoaded] = useFonts{}
  return (
    <SafeAreaView style={styles.container}>
      <Text>Finch</Text>
    </SafeAreaView>
  );
}

if (!fontsLoaded || !assetsReady) {
  return <AppLoading
    startAsync={_lo}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Concert-One",
  },
});

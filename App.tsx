/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TextRefExample from './src/screens/TextRefExample';
import WithoutOpti from './src/screens/WithoutOpti';
import DebounceSearch from './src/screens/DebounceSearch';
import KeyChainExmaple from './src/screens/KeyChainExmaple';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  {
    console.log('App Rendered');
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <TextRefExample />
        <WithoutOpti />
        <DebounceSearch />
        <KeyChainExmaple />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

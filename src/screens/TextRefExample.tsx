/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Button,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRef } from 'react';
import TextInputComponent from '../components/TextInputComponent';

function TextRefExample() {
  const isDarkMode = useColorScheme() === 'dark';
  const textRef = useRef<TextInput>(null);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <TextInputComponent ref={textRef} />
        <View style={{ marginTop: 20 }}>
          <Button
            title="Click Me"
            onPress={() => {
              textRef.current?.focus();
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            title="Clear Text"
            onPress={() => {
              textRef.current?.clear();
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TextRefExample;

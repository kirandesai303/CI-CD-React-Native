import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import useDebounce from '../hooks/useDebounce';

const DebounceSearch = () => {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedText) {
      console.log('API CALLL___', debouncedText);
    }
  }, [debouncedText]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
          paddingHorizontal: 10,
        }}
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />
      <Text style={{ marginTop: 20, fontSize: 18 }}>Typing Text: {text}</Text>
      <Text style={{ marginTop: 20, fontSize: 18 }}>
        Debounced Value: {debouncedText}
      </Text>
    </View>
  );
};
export default DebounceSearch;

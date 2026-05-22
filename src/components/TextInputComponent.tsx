// import React from 'react';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { TextInput } from 'react-native';

type TextInputHandle = {
  focus: () => void;
  clear: () => void;
};

const TextInputComponent = forwardRef<TextInputHandle>((props, ref) => {
  const internalRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    focus: () => internalRef.current?.focus(),
    clear: () => internalRef.current?.clear(),
  }));

  return (
    <>
      <TextInput
        ref={internalRef}
        {...props}
        placeholder="Enter text here"
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
          paddingHorizontal: 10,
        }}
      />
    </>
  );
});

export default TextInputComponent;

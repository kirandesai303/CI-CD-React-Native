import React from 'react';

import { Button, View } from 'react-native';
import * as KeyChain from 'react-native-keychain';

const KeyChainExmaple = () => {
  const storeCredentials = async () => {
    {
      KeyChain.setGenericPassword('userToken', 'secretToken123')
        .then(() => {
          console.log('Credentials saved successfully!');
        })
        .catch(error => {
          console.error('Error saving credentials:', error);
        });
    }
  };

  const getTokens = async () => {
    KeyChain.getGenericPassword()
      .then(credentials => {
        if (credentials) {
          console.log('Credentials retrieved:', credentials);
        } else {
          console.log('No credentials found');
        }
      })
      .catch(error => {
        console.error('Error retrieving credentials:', error);
      });
  };

  const removeCredentials = async () => {
    KeyChain.resetGenericPassword()
      .then(() => {
        console.log('Credentials removed successfully!');
      })
      .catch(error => {
        console.error('Error removing credentials:', error);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Save to Keychain"
        onPress={() => {
          storeCredentials();
        }}
      />
      <Button
        title="Get from Keychain"
        onPress={() => {
          getTokens();
        }}
      />
      <Button
        title="Remove Keychain"
        onPress={() => {
          removeCredentials();
        }}
      />
    </View>
  );
};
export default KeyChainExmaple;

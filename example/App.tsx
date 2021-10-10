import React, { useEffect, useState, VFC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { hmacMD5, hmacSHA1, hmacSHA256 } from 'react-native-hmac';

const message = 'message.';
const key = 'secretKey';

export const App: VFC = () => {
  const [MD5result, setMD5Result] = useState<string>('');
  const [SHA1result, setSHA1Result] = useState<string>('');
  const [SHA256result, setSHA256Result] = useState<string>('');

  useEffect(() => {
    hmacMD5(message, key).then(setMD5Result);
    hmacSHA1(message, key).then(setSHA1Result);
    hmacSHA256(message, key).then(setSHA256Result);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{`message: "${message}", key: "${key}"\n`}</Text>
      <Text>{`result (MD5):\n${MD5result}`}</Text>
      <Text>{`result (SHA1):\n${SHA1result}`}</Text>
      <Text>{`result (SHA256):\n${SHA256result}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 32,
    justifyContent: 'center',
  },
});

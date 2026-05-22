import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, Button } from 'react-native';

interface ChildComponentProps {
  onPress: () => void;
}

const ChildComponent = React.memo(({ onPress }: ChildComponentProps) => {
  console.log('ChildComponent rendered');
  return (
    <View style={{ marginTop: 20, alignItems: 'center' }}>
      <Text>I'm a child component</Text>
      <Button title="Click me" onPress={onPress} />
    </View>
  );
});

const WithoutOpti = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const handlePress = useCallback(() => {
    console.log('Button in ChildComponent pressed');
  }, []);

  // const expensiveCalculation = (num: number): number => {
  //   console.log('Calculating...');
  //   for (let i = 0; i < 1000000000; i++) {} // simulate heavy work
  //   return num * 2;
  // };

  // const result = expensiveCalculation(count);
  // console.log('Expensive Calculation Result:', result);
  const result = useMemo(() => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {}
    return count * 2;
  }, [count]);

  console.log('Parent Rendered');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Text style={{ fontSize: 24 }}>Other Count: {otherCount}</Text>

      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button
        title="Increment Other Count"
        onPress={() => setOtherCount(otherCount + 1)}
      />
      <ChildComponent onPress={handlePress} />
    </View>
  );
};
export default WithoutOpti;

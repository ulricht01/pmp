import { Image, StyleSheet, Platform, Button, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState<number | NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalId) return;
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    },1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId as NodeJS.Timeout);
      setIntervalId(null);
      setTime(0);
    }
  };

  useEffect(() => {
    return () => {
      if(intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);


  return (
    <View style={styles.container}>
      <Text>{time} sekund</Text>
      <View style={styles.buttonContainer}>
      <Button title="Start" onPress={startTimer}/>
      <Button title="Stop" onPress={stopTimer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,    
  },
});

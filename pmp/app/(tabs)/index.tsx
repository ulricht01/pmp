import { Image, StyleSheet, View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.gif')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(252, 255, 168, 0.8)'
  },
  mainText: {
    color: 'rgba(11, 11, 9, 0.8)',
    fontSize: 25,
    textShadowColor: 'rgba(255, 62, 62, 0.8)',
    textShadowOffset: {width: 0, height: -20},
    textShadowRadius: 2,
    fontFamily: 'Courier',
    bottom:100,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  logo: {
    width: 200,
    height: 200
  }
});

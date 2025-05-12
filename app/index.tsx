import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

const main = () => {

  const [loaded, error] = useFonts({
    'Fredoka': require('../assets/fonts/Fredoka.ttf'),
    'Caprasimo': require('../assets/fonts/Caprasimo.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ImageBackground source={require("../assets/images/dailymon-bg.png")} resizeMode='cover' style={styles.background}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('../assets/images/Spiritomb.png')} />
        <Text style={styles.title}>Dailymon</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.h1}>O pokemon do dia é: </Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  }, image: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  }, container: {
    marginTop: 80,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    width: '90%',
    alignItems: 'center',
  }, header: {
    paddingVertical: 12,
    flexDirection: 'row',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#5e228b",
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  }, title: {
    fontFamily: "Caprasimo",
    fontWeight: 400,
    color: '#fff', 
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 6 },
    textShadowRadius: 4,
    fontSize: 48,
  }, h1: {
    fontSize: 24,
    fontWeight: 400,
    fontFamily: "Caprasimo",
  }
})

export default main
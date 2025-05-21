import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import PokemonInformation from "@/src/components/pokemonInformation";
import fetchPokemon from "@/src/utils/fetchPokemon";
import {
  baseStatsType,
  pokedexDataType,
  WrongPokemonNameError,
} from "../utils/pokemonInformation.types";
import PokemonNotFound from "../components/pokemonNotFound";

const HomeScreen = () => {
  const [loaded, error] = useFonts({
    Fredoka: require("../assets/fonts/Fredoka.ttf"),
    Caprasimo: require("../assets/fonts/Caprasimo.ttf"),
  });
  const [baseStats, setBaseStats] = useState<baseStatsType | null>(null);
  const [pokedexData, setPokedexData] = useState<pokedexDataType | null>(null);

  // se o fetchPokemon der error, o erro vai ser identificado nessa variavel,
  // se o usuario digitar o nome do pokemon errado, o erro sera o
  // WrongPokemonNameError
  const [fetchError, setFetchError] = useState<Error | null>(null);

  //Link para a imagem do pokemon
  const [ImageLink, setImageLink] = useState<string>("");

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  // fetch pokemon data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchPokemon();

        setBaseStats(result.baseStats as baseStatsType);
        setPokedexData(result.pokedexData as pokedexDataType);
        setImageLink(result.pokemonImageLink);
      } catch (error: unknown) {
        if (error instanceof WrongPokemonNameError) {
          console.log("You typed the wrong pokemon name"); //TODO
          setFetchError(error as WrongPokemonNameError);
        } else {
          console.log(error);
          setFetchError(error as Error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/images/dailymon-bg.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../assets/images/Spiritomb.png")}
        />
        <Text style={styles.title}>Dailymon</Text>
      </View>
      <View style={styles.pokemonContainer}>
        <View style={styles.pokemonInfo}>
          <Text style={styles.h1}>O pokemon do dia é: </Text>
          {baseStats && pokedexData && !fetchError ? (
            <PokemonInformation
              baseStats={baseStats}
              pokedexData={pokedexData}
            />
          ) : (
            // componente placeholder simples para o pokemon nao encontrado
            <PokemonNotFound />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 70,
    width: 70,
    resizeMode: "contain",
  },

  pokemonContainer: {
    flexDirection: "column",
    marginTop: 70,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  
  pokemonInfo: {
    borderWidth: 3,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  header: {
    paddingVertical: 12,
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#5e228b",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontFamily: "Caprasimo",
    fontWeight: 400,
    color: "#fff",
    textShadowColor: "#00000040",
    textShadowOffset: { width: 0, height: 6 },
    textShadowRadius: 4,
    fontSize: 48,
  },
  h1: {
    fontSize: 48,
    fontWeight: 400,
    fontFamily: "Caprasimo",
  },
});

export default HomeScreen;

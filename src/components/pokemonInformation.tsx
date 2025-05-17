import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import {
  baseStatsType,
  pokedexDataType,
} from "@/src/utils/pokemonInformation.types";

interface pokemonInformationProps {
  baseStats: baseStatsType;
  pokedexData: pokedexDataType;
}

const PokemonInformation = ({
  baseStats,
  pokedexData,
}: pokemonInformationProps) => {
  return (
    <View style={styles.pokemonInformationContainer}>
      {/* <Text>{pk_name}</Text> */}
      <Text>Ditto</Text>
      <Image
        source={require("../../assets/images/ditto 1.png")}
        style={styles.pokemonImage}
      />

      <View>
        <View>
          <Text>Stats Bases</Text>
          <Text>{baseStats?.hp}</Text>
        </View>
        <View>
          <Text>Dados da Pokédex</Text>
          <Text>{pokedexData?.types}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonInformationContainer: {
    margin: 0,
    alignItems: "center",
  },
  pokemonImage: {
    width: 100,
    height: 100,
    // borderWidth: 5,
    // borderColor: "red",
  },
});

export default PokemonInformation;

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
  const barWidth = baseStats?.hp ?? 50;
  const barColor =
    barWidth >= 150
      ? "#00c2b8"
      : barWidth >= 120
      ? "#23cd5e"
      : barWidth >= 90
      ? "#a0e515"
      : barWidth >= 30
      ? "#ff7f0f"
      : barWidth >= 1
      ? "#f34444"
      : "green";
  return (
    <View style={styles.pokemonInformationContainer}>
      {/* <Text>{pk_name}</Text> */}
      <Text style={styles.h2}>Ditto</Text>
      <Image
        source={require("../assets/images/ditto-1.png")}
        style={styles.pokemonImage}
      />

      <View style={styles.pokemonInfo}>
        <View style={styles.pokemonStats}>
          <Text style={styles.h2}>Stats Bases</Text>
          <View style={styles.stats}>
            <Text style={styles.h3}>HP {baseStats?.hp}</Text>
            <View
              style={[
                styles.statbar,
                { width: barWidth, backgroundColor: barColor },
              ]}
            />
          </View>
        </View>
        <View style={styles.pokemonData}>
          <Text style={styles.h2}>Dados da Pokédex</Text>
          <View style={styles.stats}>
          <Text style={styles.h3}>Tipo {pokedexData?.types.join(", ")}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  h2: {
    fontFamily: "Fredoka",
    fontSize: 32,
  },
  h3: {
    fontFamily: "Fredoka",
    fontSize: 24,
  },
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
  pokemonInfo: {
    flexDirection: "row",
  },
  pokemonStats: {
    margin: 20,
    flex: 1,
  },
  pokemonData: {
    margin: 20,
    flex: 1,
  },
  statbar: {
    height: 10,
    borderRadius: 3,
    borderWidth: 1,
    margin: 10,
  },
  stats: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default PokemonInformation;

import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const PokemonInformation = () => {
  return (
    <View style={styles.pokemonInformationContainer}>
      {/* <Text>{pk_name}</Text> */}
      <Text>Ditto</Text>
      <Image
        source={require("../assets/images/ditto 1.png")}
        style={styles.pokemonImage}
      />

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonInformationContainer: {
    margin: 0,
    alignItems: 'center',
  },
  pokemonImage: {
    width: 100,
    height: 100,
    // borderWidth: 5,
    // borderColor: "red",
  },
});

export default PokemonInformation;

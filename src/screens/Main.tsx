import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
// Style
import { styles } from "../styles/styles";
// Api
import { getBreeds } from "../api/breeds";
// types
import { Breed } from "../types/breed";
import { Inavigation } from "../types/iNavigation";
interface Iprops extends Inavigation {}

export default function Main({ navigation }: Iprops) {
  const [breeds, setBreeds] = useState<Breed[]>([]);

  const loadBreeds = () => {
    getBreeds()
      .then((breeds) => setBreeds(breeds))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadBreeds();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {breeds.map((breed) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ChooseCats", { breed })}
            key={breed.id}
          >
            <View style={[styles.blockView, styles.shadow]}>
              <Image
                style={styles.blockImage}
                source={{ uri: breed.image?.url }}
              />

              <View style={styles.blockViewText}>
                <Text style={styles.blockTextName}>{breed.name}</Text>
                <Text style={styles.blockText}>
                  {breed.description.substring(0, 75)} ...
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

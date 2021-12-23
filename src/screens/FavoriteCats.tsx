import React, { useState, useEffect } from "react";
import { View, Image, ScrollView, SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
// Style
import { styles } from "../styles/styles";
// API
import { getFavoriteCats } from "../api/getFavourites";
// Types
import { Breed } from "../types/breed";

export default function CatsFavoritePage() {
  const [cats, setCats] = useState<Breed[]>([]);

  const loadFavorites = () => {
    getFavoriteCats()
      .then((cats) => setCats(cats))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useFocusEffect(loadFavorites);

  return (
    <SafeAreaView style={[styles.container, styles.favoritePage]}>
      <ScrollView>
        {cats.map((f) => (
          <View style={styles.viewImageFavorite} key={f.id}>
            <Image
              style={styles.imageFavorite}
              source={{ uri: f.image?.url }}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

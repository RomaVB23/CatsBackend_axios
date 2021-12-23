import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// API
import { getNewImage } from "../api/randompicture";
import { addToFavorites } from "../api/addToFavourites";
// Components
import Buttom from "../components/Buttom";
// Styles
import { styles } from "../styles/styles";
//Types
import { Breed } from "../types/breed";
import { Inavigation } from "../types/iNavigation";
import { Irote } from "../types/iNavigation";

interface Iparams {
  breed: Breed;
}
interface Iprops extends Inavigation, Irote<Iparams> {}

export default function ChosenCat({ navigation, route }: Iprops) {
  const { breed } = route.params;
  const [image, setImage] = useState(breed.image);

  const changeImage = async () => {
    const imageNew = await getNewImage(breed.id);
    if (imageNew) {
      setImage(imageNew);
    }
  };

  const addFavorite = () => {
    addToFavorites(image.id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          style={{ width: 80, height: 80 }}
          source={require("../../assets/image/Back.png")}
        />
      </TouchableOpacity>
      <View style={[styles.shadow, styles.imageView]}>
        <Image style={[styles.image]} source={{ uri: image?.url }} />
      </View>

      <Text style={styles.h1}>{breed?.name}</Text>

      <Text style={styles.p}> {breed.description}</Text>

      <View style={styles.buttonArea}>
        <TouchableOpacity onPress={() => changeImage()}>
          <Buttom textButom="Другое фото" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => addFavorite()}>
          <Buttom textButom="Добавить в избранное" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

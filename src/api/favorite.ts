import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export const addPokemonToFavoriteApi = async (id) => {
  try {
    const favorites: number[] = await getPokemonsFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (err) {
    throw err;
  }
};

export const getPokemonsFavoriteApi = async () => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);

    return JSON.parse(response || []);
  } catch (err) {
    throw err;
  }
};

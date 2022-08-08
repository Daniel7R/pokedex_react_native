import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";

import { addPokemonToFavoriteApi } from "../api/favorite";
interface Props {
    id: number
}

const Favorite = (props: Props) => {
    const { id } = props;
    const addFavorite = async () => {
        await addPokemonToFavoriteApi(id);

    }
    return (
        <Icon
            name="heart"
            style={{ marginRight: 20 }}
            color={"#fff"}
            size={20}
            onPress={addFavorite}
        />
    )
}

export { Favorite }
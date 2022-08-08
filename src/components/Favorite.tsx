import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";

import { addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from "../api/favorite";
interface Props {
    id: number
}

const Favorite = (props: Props) => {
    const { id } = props;

    const [isFavorite, setIsFavorite] = React.useState(undefined);
    const [reload, setReload] = React.useState(false);
    const addFavorite = async () => {
        await addPokemonFavoriteApi(id);

    };

    const removeFavorite = async () => {
        try {
            await removePokemonFavoriteApi(id);
            onReload();
        } catch (err) {
            console.log(err);
        }
    }

    const onReload = () => {
        setReload(!reload)
    }

    React.useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavoriteApi(id);
                setIsFavorite(response);
                onReload()
            } catch (err) {
                setIsFavorite(false)
            }
        })();
    }, [id, reload])
    return (
        <Icon
            name="heart"
            style={{ marginRight: 20 }}
            color={"#fff"}
            size={20}
            onPress={isFavorite ? removeFavorite : addFavorite}
            solid={isFavorite}
        />
    )
}

export { Favorite }
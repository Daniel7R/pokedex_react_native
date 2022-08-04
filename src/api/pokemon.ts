import { API_HOST } from "./../utils/constants";

export async function getPokemonsApi(endPoint) {
  try {
    let url;
    if (endPoint === null) {
      url = `${API_HOST}/pokemon?limit=20&offset=0`;
    } else {
      url = endPoint;
    }
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (err) {
    throw err;
  }
}

export async function getPokemonDetailsApi(url: string) {
  try {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (err) {
    throw err;
  }
}

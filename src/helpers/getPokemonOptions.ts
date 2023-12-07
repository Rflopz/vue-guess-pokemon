import pokeApi from "@/api/pokemonApi";

const getPokemons = () => {
  const pokeArr = Array.from(Array(649));
  return pokeArr.map((_, i) => i + 1);
};

const getPokemonOptions = async () => {
  const pokemons = getPokemons().sort(() => Math.random() - 0.5);
  return await getPokemonNames(pokemons.splice(0, 4));
};

const getPokemonNames = async (list: Array<number>) => {
  const result = await Promise.all(
    list.map((pokemonId) => pokeApi.get(`/${pokemonId}`))
  );

  return result.map(({ data }) => ({ name: data.name, id: data.id }));
};

export default getPokemonOptions;

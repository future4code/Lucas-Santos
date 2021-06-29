import { useEffect, useState } from "react";
import { api } from "../services/api";

import './styles.css'

type PokemonProps = {
  pokemonName: string
}

type PokeType = {
  name: string,
  weight: number,
  types: [{
    slot: number,
    type: {
      name: string
    }
  }],
  sprites: {
    front_default: string
  }
}

export const PokemonsList = (props: PokemonProps) => {
  const [pokemon, setPokemon] = useState({} as PokeType)

  useEffect(() => {
    showPokemon()
  }, [props.pokemonName])

  const showPokemon = async () => {
    try {
      const res = await api.get(`${props.pokemonName}`)
      setPokemon(res.data)
    } catch (err) {
      alert(err)
    }
  }

  console.log(pokemon.sprites)
  return (
    <div className='cardPokemon'>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
    </div>
  );
}
